import express, { type Express } from "express";
import { dotenv, logger, db, swagger } from "./config";
import routes from "./routes";

dotenv();

class Server {
  private app: Express = express();
  private PORT = process.env.PORT ?? 8080;

  private middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    swagger(this.app);
    this.app.use("/api", routes());
  }

  private startServer() {
    const cb = () => logger.info(`Server running at: ${this.PORT}`);
    this.app.listen(this.PORT, cb);
  }

  public async bootstrap() {
    try {
      await db();
      this.middlewares();
      this.startServer();
    } catch (error) {
      const { message } = error as Error;
      logger.error(message);
      process.exit(0);
    }
  }
}

new Server().bootstrap();
