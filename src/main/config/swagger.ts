import { serve, setup } from "swagger-ui-express";
import { type Express } from "express";
import docs from "../docs";

export default (app: Express) => {
  app.use("/api-docs", serve, setup(docs));
};
