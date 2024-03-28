import { Router } from "express";
import { productControllers } from "../../controllers/index.js";
import { getPageControllers } from "../../controllers/index.js";

const router = Router();

router.post("/", productControllers.postProducts);
router.get("/:shownElements?/:pageNum?/:filters?", productControllers.getAllProducts);
router.get("/detail/:id", productControllers.getProductById);
router.get("/search", productControllers.getProductByName);

router.get("/page/:shownElements/:pageNum", getPageControllers.getPage);

export default router;

// http://localhost:num_port/api/v1/products/

// http://localhost:num_port/api/v1/products/detail/id
// http://localhost:num_port/api/v1/products/search
