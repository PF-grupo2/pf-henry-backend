import { Router } from "express";
import { productControllers } from "../../controllers";


const router = Router();

router.post("/", productControllers.postProducts);
router.get("/", productControllers.getAllProducts);
router.get("/:id", productControllers.getProductById)
router.get("/search", productControllers.getProductByName) 

export default router