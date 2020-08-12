import User from "../models/User";

export const handleHome = (req, res) => {
    res.send("HOME!");
};

export const handleLogin = (req, res) => {
    res.send("Login");
};

export const handleJoin = async(req, res) => {
    res.send("Join");
    const userId = req.body.id;
    const userPw = req.body.pw;
    const userPH = req.body.ph;

    const newUser = await User.create({
        id: userId,
        pw: userPw,
        ph: userPH,
    });
};

export const handlefind = async(req, res) => {
    res.send("Join");
    const userId = req.body.id;

    const dbList = await User.find(); //DB 정보를 리스트를 받음
    for (let i = 0; i < dbList.length; ++i) {
        if (dbList[i]["id"] == userId) {
            res.send("중복!");
        }
    }
};