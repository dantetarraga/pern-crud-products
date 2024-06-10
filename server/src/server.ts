import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import db from "./config/db";
import swaggerSpec from "./config/swagger";
import router from "./router";

export async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connectDB();
const server = express();
server.use(express.json());
server.use(cors());
server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

server.use("/api/products", router);

export default server;
