import { Router } from "express";
import { expressAdapter } from "../config";
import { createUserControllerFactory } from "../factory/controller/user";

export default (router: Router) => {
  router.post("/user", expressAdapter(createUserControllerFactory()));
};
