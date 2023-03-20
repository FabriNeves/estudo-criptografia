import express from "express";
import loginControllers from "../controllers/loginControllers.js";

const registerRouter = express.Router();

const nomeRota = "register";

registerRouter .route(`/${nomeRota}`)  
  .post(loginControllers.register); 


export default registerRouter;