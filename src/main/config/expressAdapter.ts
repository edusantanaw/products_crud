import { type Request, type Response } from "express";
import { IController } from "../../@types/controller";
import errorHandler from "./errorHandler";
import logger from "./logger";

export default <In>(controller: IController<In>) => {
  return async (req: Request, res: Response) => {
    try {
      const { statusCode, data } = await controller.handler({
        ...req.body,
        ...req.params,
        ...req.query,
      });
      logger.info(`${req.ip}-${req.statusCode}-${req.url}`);
      return res.status(statusCode).json(data);
    } catch (error) {
      const { data, statusCode } = errorHandler(error);
      logger.error(`${req.ip}-${data}`);
      return res.status(statusCode).json(data);
    }
  };
};
