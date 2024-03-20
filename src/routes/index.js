import { Router } from "express";
import userRoutes from "./user/index.js";
import productsRoutes from "./product/index.js"
const router = Router();

router.use("/users", userRoutes);
router.use("/products", productsRoutes)

export default router;
