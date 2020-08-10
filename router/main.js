import express from "express";
//import { handleHome, handleLogin } from "../controller/homeController";
import routes from "../routes";

const homeRouter = express.Router();

//homeRouter.get(routes.home, handleHome);
//homeRouter.get(routes.login, handleLogin);



export default homeRouter;