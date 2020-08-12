import helmet from "helmet";
import morgan from "morgan";
import cookieparser from "cookie-parser";
import bodyparser from "body-parser"
import homeRouter from "./router/homeRouter.js";
const express = require('express')
const app = express()
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/', homeRouter);


export default app;