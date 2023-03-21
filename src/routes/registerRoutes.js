import express from "express";
import loginControllers from "../controllers/loginControllers.js";

const registerRouter = express.Router();

const nomeRota = "register";

registerRouter.route(`/${nomeRota}`)
  .post(loginControllers.register);

registerRouter.route(`/${nomeRota}/:id`)
  .delete(loginControllers.delete);

export default registerRouter;