import { Sequelize } from "sequelize";
import { dotenv } from "./";

dotenv();

const HOST = process.env.POSTGRES_HOST!;
const USER = process.env.POSTGRES_USER!;
const DATABASE = process.env.POSTGRES_DATABASE!;
const PASSWORD = process.env.POSTGRES_PASSWORD!;

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: "postgres",
});

export default sequelize;
