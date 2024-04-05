import { Router } from "express";
import { saleDetailControllers } from "../../controllers/index.js";
// import { jwtMiddlewares } from "../../middlewares/index.js";

const router = Router();

router.delete("/saleDetail/:id", saleDetailControllers.deleteSaleDetail);
router.get("/saleDetail", saleDetailControllers.getSaleDetail);
router.post("/saleDetail", saleDetailControllers.postSaleDetail);
router.put("/saleDetail/:id", saleDetailControllers.putSaleDetail);

/*
router.delete("/saleDetail/:id", jwtMiddlewares.validatJWT, saleDetailControllers.deleteSaleDetail);
router.get("/saleDetail", jwtMiddlewares.validatJWT, saleDetailControllers.getSaleDetail);
router.post("/saleDetail", jwtMiddlewares.validatJWT, saleDetailControllers.postSaleDetail);
router.put("/saleDetail/:id", jwtMiddlewares.validatJWT, saleDetailControllers.putSaleDetail);
*/
export default router;
