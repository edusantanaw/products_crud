import { serve } from 'swagger-ui-express';
import express, { type Express } from "express";
import { dotenv, logger, db, swagger } from "./config";
import routes from "./routes";
import { Server as SocketServer } from "socket.io";
import http from "http";
import cors from "cors";

dotenv();

class Server {
  private app: Express = express();
  private PORT = process.env.PORT ?? 8080;

  private middlewares() {
    this.app.use(cors({ credentials: true, origin: "*" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    swagger(this.app);
    this.app.use("/api", routes());
  }

  public get getApp() {
    return this.app;
  }

  private startServer() {
    const cb = () => logger.info(`Server running at: ${this.PORT}`);
    const server = http.createServer(this.app);
    const socket = new SocketServer(server, {
      cors: {
        origin: "*",
        methods: "*",
      },
    });
    this.app.set("socket", socket);
    server.listen(this.PORT, cb);
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

const newServer = new Server();
newServer.bootstrap()
export default newServer.getApp