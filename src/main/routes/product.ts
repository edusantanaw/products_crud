import { Router } from "express";
import { expressAdapter } from "../config";
import { createProductControllerFactory } from "../factory/controller/product/create";
import authMiddleware from "../middlewares/authMiddleware";
import { updateProductControllerFactory } from "../factory/controller/product/update";
import { loadAllProductControllerFactory } from "../factory/controller/product/loadAll";
import { deleteProductControllerFactory } from "../factory/controller/product/delete";
import { loadProductByIdControllerFactory } from "../factory/controller/product/loadById";

export default (router: Router) => {
  router.post(
    "/product",
    authMiddleware,
    expressAdapter(createProductControllerFactory())
  );
  router.get(
    "/product",
    authMiddleware,
    expressAdapter(loadAllProductControllerFactory())
  );
  router.delete(
    "/product/:id",
    authMiddleware,
    expressAdapter(deleteProductControllerFactory())
  );
  router.get(
    "/product/:id",
    authMiddleware,
    expressAdapter(loadProductByIdControllerFactory())
  );
  router.put(
    "/product/:id",
    authMiddleware,
    expressAdapter(updateProductControllerFactory())
  );
};
