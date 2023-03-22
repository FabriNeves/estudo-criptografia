import express from "express";
import loginControllers from "../controllers/loginControllers.js";
import {verifyJWT} from "../middleware/verifyJWT.js";

const loginRouter = express.Router();

const nomeRota = "login";

loginRouter.route(`/${nomeRota}`)
  .get(loginControllers.login);

loginRouter.route(`/${nomeRota}/dev`)
  .get(verifyJWT,loginControllers.read);


export default loginRouter;
