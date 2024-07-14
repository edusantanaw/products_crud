import { Router } from "express";
import user from "./user";
import product from "./product";

export default () => {
  const routers = [user, product];
  const router = Router();
  routers.forEach((r) => r(router));
  return router;
};
