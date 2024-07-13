import dotenv from "./dotenv";
import sequelize from "./sequelize";

dotenv();

const ENVIRONMENT = Number(process.env.ENVIRONMENT ?? 0);

export default async () => {
  await sequelize.sync({ force: ENVIRONMENT === 0 });
};
