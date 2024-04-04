import { Router } from "express";
import { saleControllers } from "../../controllers/index.js";

// import { jwtMiddlewares } from "../../middlewares/index.js";

const router = Router();

router.delete("/sale/id", saleControllers.deleteSale);
router.post("/sale/id", saleControllers.postSale);
router.get("/sale", saleControllers.getSale);
router.put("/sale", saleControllers.putSale);

/**
 * 
 * Middleware Implementation
 * 
 * 
 *    router.delete("/sale/id",jwtMiddlewares.validatJWT, saleControllers.deleteSale);
   router.post("/sale/id", jwtMiddlewares.validatJWT, saleControllers.postSale);
   router.get("/sale", jwtMiddlewares.validatJWT,saleControllers.getSale);
   router.put("/sale", jwtMiddlewares.validatJWT,saleControllers.putSale);
 * 
 */

export default router;
