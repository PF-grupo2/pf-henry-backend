import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/index.js";



const server = express();

// Middlewares
server.use(express.json());
server.use(cors({
  origin: ["https://pf-henry-backend.onrender.com", "http://localhost:5173"],
  credentials: true,
}));
server.use(morgan("dev"));


// Route de la api
server.use("/api/v1", router);

export default server;