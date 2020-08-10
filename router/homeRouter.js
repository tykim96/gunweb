import express from "express";
import { handleHome, handleLogin, handleMain, handleMain_id } from "../controller/homeController";
import routes from "../routes";

const homeRouter = express.Router();

homeRouter.get(routes.home, handleHome);
homeRouter.get(routes.login, handleLogin);

homeRouter.post('/main', function(req, res) {
    res.send(JSON.stringify("This is main"));
});

homeRouter.get('/main/:id', function(req, res) {
    res.send(JSON.stringify("usertype is " + req.param.id));
});

homeRouter.post('/user/employer', function(req, res) {
    res.send(JSON.stringify("고용자 데이터 전송" + req.params.id + ' ' + req.params.pw + ' ' + req.params.id));
})


export default homeRouter;