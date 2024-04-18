import { Router } from "express";
import { productControllers } from "../../controllers/index.js";


/*
import {
  jwtMiddlewares,
  securityMiddlewares,
} from "../../middlewares/index.js";
*/

const router = Router();

router.post("/", productControllers.postProducts);


router.get(
  "/listProducts/:shownElements?/:pageNum?/:filters?",
  productControllers.getAllProducts
);
router.get("/detail/:id", productControllers.getProductById);
router.get("/search", productControllers.getProductByName);

router.put("/stock/:id/:quantity", productControllers.updateStock)

router.put("/edit/:id", productControllers.putProducts)

router.delete('/delete/:id', productControllers.deleteProducts);

// Middlewares Implementaion

/*
router.post(
  "/",
  jwtMiddlewares.validatJWT,
  securityMiddlewares.isAdmin,
  productControllers.postProducts
);

*/

export default router;

// http://localhost:num_port/api/v1/products/

// http://localhost:num_port/api/v1/products/detail/id
// http://localhost:num_port/api/v1/products/search

//instrucciones para usar getAllProducts(con paginado, filtrado y search) en "../../controllers/product/getAllProducts.js"
