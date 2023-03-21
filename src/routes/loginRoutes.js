import express from "express";
import loginControllers from "../controllers/loginControllers.js";

const loginRouter = express.Router();

const nomeRota = "login";

loginRouter.route(`/${nomeRota}`)
  .get(loginControllers.login);

loginRouter.route(`/${nomeRota}/dev`)
  .get(loginControllers.read);


export default loginRouter;
