import app from "./app";
import dotenv from "dotenv"
import db from "./db";
dotenv.config();
const PORT = process.env.PORT;
//port번호를 .env에 넣고 같고오는 이유는 포트번호를 노출시 데이터 노출이 될 가능성이 있기때문에??

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});