import { Router } from "express";
import authRoutes from "./auth/index.js";
import userRoutes from "./user/index.js";
import productsRoutes from "./product/index.js";

import saleDetailRoutes from "./saleDetail/index.js"
import saleRoutes from "./sale/index.js";
import reviewRoutes from "./review/index.js";
import shoppingCartRoutes from "./shoppingCart/index.js";

import uploadRouter from "../routes/upload/index.js"

import mercadoRoutes from "./mercadopago/index.js"

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/products", productsRoutes);
router.use("/review", reviewRoutes);


router.use("/upload", uploadRouter);
router.use("/saleDetail", saleDetailRoutes);
router.use("/sale", saleRoutes);
router.use("/review", reviewRoutes);
router.use("/shoppingCart", shoppingCartRoutes);


router.use("/mercadopago", mercadoRoutes)



export default router;
