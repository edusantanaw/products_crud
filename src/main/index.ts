import express, { type Express } from "express";
import { dotenv } from "./config";
import { logger } from "./config";
import "./config/sequelize";

dotenv();

class Server {
  private app: Express = express();
  private PORT = process.env.PORT ?? 8080;

  private middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private startServer() {
    const cb = () => logger.info(`Server running at: ${this.PORT}`);
    this.app.listen(this.PORT, cb);
  }

  public boostrap() {
    this.middlewares();
    this.startServer();
  }
}

new Server().boostrap();
