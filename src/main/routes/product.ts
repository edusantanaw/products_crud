import { Router } from "express";
import { expressAdapter } from "../config";
import { createProductControllerFactory } from "../factory/controller/product/create";
import authMiddleware from "../middlewares/authMiddleware";
import { updateProductControllerFactory } from "../factory/controller/product/update";
import { loadAllProductControllerFactory } from "../factory/controller/product/loadAll";
import { deleteProductControllerFactory } from "../factory/controller/product/delete";
import { loadProductByIdControllerFactory } from "../factory/controller/product/loadById";
import { deleteAllProductsControllerFactory } from "../factory/controller/product/deleteAll";
import { createRandomProductsControllerFactory } from "../factory/controller/product/createRandom";

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
  router.post(
    "/product/random",
    authMiddleware,
    expressAdapter(createRandomProductsControllerFactory())
  );
  router.delete("/product/all", (req, res) => {
    const deleteAllProductsController = deleteAllProductsControllerFactory();
    return deleteAllProductsController.handler(req, res);
  });
  router.delete(
    "/product/:id",
    authMiddleware,
    expressAdapter(deleteProductControllerFactory())
  );
};
