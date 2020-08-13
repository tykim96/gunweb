import User from "../models/User";
import { models } from "mongoose";
import crypto from "crypto"

export const handleHome = (req, res) => {
    res.send("HOME!");
};

export const handleLogin = (req, res) => {
    res.send("Login");
};

const key = 'albaheven'

const cipher = (password, key) => { //암호화
    const encrypt = crypto.createCipher('des', key)
    const encryptResult = encrypt.update(password, 'utf8', 'base64') +
        encrypt.final('base64')
    console.log(encryptResult)
    return encryptResult
}

const decipher = (password, key) => { //해독
    const decode = crypto.createDecipher('des', key)
    const decodeResult = decode.update(password, 'base64', 'utf8') +
        decode.final('utf8')
    console.log(decodeResult)
}


export const handleJoin = async(req, res) => {
    // const userId = req.body.id;
    // const userPw = req.body.pw;
    // const userphonenumber = req.body.ph;

    // const newUser = await User.create({
    //     id: userId,
    //     pw: userPw,
    //     phonenumber: userphonenumber,
    // });
    const userId = req.body.id;
    const userPw = cipher(req.body.pw, key);
    const userPh = req.body.ph;
    console.log(req.body.id);
    console.log(userPw);
    console.log(req.body.ph);

    var b = true;

    const dbList = await User.find(); //DB 정보를 리스트를 받음
    for (let i = 0; i < dbList.length; ++i) {
        if (dbList[i]["id"] == userId) {
            res.send("중복!");
            b = false;
        }
    }
    if (b == true) {
        var newUser = {
            id: userId,
            pw: userPw,
            ph: userPh
        }
        const users = await User.create(newUser);
        res.send("Join" + req.body.id + ' ' + userPw + ' ' + req.body.ph);
    }
};