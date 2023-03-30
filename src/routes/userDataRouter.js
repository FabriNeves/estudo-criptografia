import express from "express";
import genericController from "../controllers/userDataControllers.js";
import {verifyJWT} from "../middleware/verifyJWT.js";

const userDataRouter = express.Router();

const nomeRota = "userData";

// http://localhost:3000/userData/exercicios/
userDataRouter.route(`/${nomeRota}`)
  .get(verifyJWT,genericController.readAllbyID);


export default userDataRouter;