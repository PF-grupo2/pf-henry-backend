import { Router } from "express";
import authRoutes from "./auth/index.js";
import userRoutes from "./user/index.js";
import productsRoutes from "./product/index.js";
const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/products", productsRoutes);

export default router;
