import express from "express";
import cors from "cors";
import morgan from "morgan";
// import multer from "multer";
import router from "./routes/index.js";



const server = express();

// Middlewares
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Origin",
      "https://pf-henry-backend.onrender.com/"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept,x-token"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    next();
  });



// Route de la api
server.use("/api/v1", router);

export default server;
