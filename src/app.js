import express from "express";
import loginRouter from "./routes/loginRoutes.js";
import baseReponseModule from "./config/responseDefaultObj.js";

const app = express();

app.use(loginRouter);

app.get("/", (req,res) =>{

    console.log(req.headers);
    const message = "Index";
    const status = 200;
    const isSuccess = true;
    res.status(200).send(new baseReponseModule(message,isSuccess,status));

});

// ---> Server.js
export default app;