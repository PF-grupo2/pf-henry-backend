import { Router } from "express";
import { productControllers } from "../../controllers/index.js";

const router = Router();

router.post("/", productControllers.postProducts);
router.get("/listProducts/:shownElements?/:pageNum?/:filters?", productControllers.getAllProducts);
router.get("/detail/:id", productControllers.getProductById);
router.get("/search", productControllers.getProductByName);

export default router;

// http://localhost:num_port/api/v1/products/

// http://localhost:num_port/api/v1/products/detail/id
// http://localhost:num_port/api/v1/products/search


//instrucciones para usar getAllProducts(con paginado, filtrado y search) en "../../controllers/product/getAllProducts.js"
