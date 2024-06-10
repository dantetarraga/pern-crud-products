import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";

dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL!, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {},
  models: [__dirname + "/../models/**/*.ts"],
});

export default db;
