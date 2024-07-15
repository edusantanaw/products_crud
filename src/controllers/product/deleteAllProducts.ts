import { Request, Response } from "express";
import { Server } from "socket.io";
import {
  DeleteProductUsecase,
  LoadAllProductsUsecase,
} from "../../application/usecases/product";
import { logger } from "../../main/config";

const DELETE_PER = 10;

export class DeleteAllProductsController {
  constructor(
    protected loadAllProductsUsecase: LoadAllProductsUsecase,
    protected deleteProductUsecase: DeleteProductUsecase
  ) {}

  public async handler(req: Request, res: Response) {
    try {
      const products = await this.loadAllProductsUsecase.loadAll();
      const socket: Server = req.app.get("socket");
      for (let i = 0; i < products.length; i += DELETE_PER) {
        const current = products
          .slice(i, i + DELETE_PER - 1)
          .map((e) => this.deleteProductUsecase.delete(e.id));

        const deleteResult = await Promise.allSettled(current);
        const rejects = deleteResult
          .map((e) => e.status)
          .filter((e) => e === "rejected").length;
        if (rejects > 0) logger.error(`${rejects} products delete fail!`);

        const progress = Math.round((i / products.length) * 100);
        socket.emit("delete_progress", { progress });
      }
      return res.status(200).json({ message: "All products deleted!" });
    } catch (error) {
      const { message } = error as Error;
      logger.error(`product delete error - ${message}`);
      return res.status(400).json({ message });
    }
  }
}
