import { Router } from "express";
import { expressAdapter } from "../config";
import {
  authControllerFactory,
  createUserControllerFactory,
} from "../factory/controller/user";
import validationMiddleware from "../middlewares/validationMiddleware";
import { authData, createUserData } from "../middlewares/validation/user";

export default (router: Router) => {
  router.post(
    "/auth",
    validationMiddleware(authData),
    expressAdapter(authControllerFactory())
  );
  router.post(
    "/user",
    validationMiddleware(createUserData),
    expressAdapter(createUserControllerFactory())
  );
};
