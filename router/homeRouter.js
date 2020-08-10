import express from "express";
import { handleHome, handleLogin, handleMain, handleMain_id } from "../controller/homeController";
import routes from "../routes";

const homeRouter = express.Router();

homeRouter.get(routes.home, handleHome);
homeRouter.get(routes.login, handleLogin);

homeRouter.post(routes.Main, handleMain);
homeRouter.get(routes.Main_id, handleMain_id);

export default homeRouter;