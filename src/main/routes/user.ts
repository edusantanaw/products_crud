import { Router } from "express";
import { expressAdapter } from "../config";
import {
  authControllerFactory,
  createUserControllerFactory,
} from "../factory/controller/user";

export default (router: Router) => {
  router.post("/auth", expressAdapter(authControllerFactory()));
  router.post("/user", expressAdapter(createUserControllerFactory()));
};
