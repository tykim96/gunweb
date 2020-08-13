import User from "../models/User";
import { models } from "mongoose";

export const handleHome = (req, res) => {
    res.send("HOME!");
};

export const handleLogin = (req, res) => {
    res.send("Login");
};

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
    const userPw = req.body.pw;
    const userPh = req.body.ph;
    console.log(req.body.id);
    console.log(req.body.pw);
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
        res.send("Join" + req.body.id + req.body.pw + req.body.ph);
    }


};

export const handlefind = async(req, res) => {
    res.send("Join");
    const userId = req.body.id;


};