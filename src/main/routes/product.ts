import { Router } from "express";
import { expressAdapter } from "../config";
import { createProductControllerFactory } from "../factory/controller/product/create";
import authMiddleware from "../middlewares/authMiddleware";

export default (router: Router) => {
  router.post(
    "/product",
    authMiddleware,
    expressAdapter(createProductControllerFactory())
  );
};
