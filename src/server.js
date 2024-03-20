import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/index.js";

const server = express();

// Middlewares
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use(router);

export default server;
