import express from "express";
import loginControllers from "../controllers/loginControllers.js";

const loginRouter = express.Router();

const nomeRota = "login";

loginRouter.route(`/${nomeRota}`)
  .get(loginControllers.read)
  .get(loginControllers.login); 


export default loginRouter;
