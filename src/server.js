import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";
import router from "./routes/index.js";



const server = express();

// Middlewares
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

// config Multer
const upload = multer({ dest: "uploads" })

//middleware de Multer para manejar la carga de archivos
server.use(upload.single("image"));



// Route de la api
server.use("/api/v1", router);

export default server;
