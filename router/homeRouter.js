import express from "express";
import { handleHome, handleLogin, handleJoin } from "../controller/homeController";


const homeRouter = express.Router();

homeRouter.get("/", handleHome);
homeRouter.get('/login', handleLogin);
homeRouter.post('/join', handleJoin);
export default homeRouter;