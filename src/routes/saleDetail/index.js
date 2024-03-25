import { Router } from "express";
import { saleDetailControllers } from "../../controllers/index.js";


const router = Router();

router.delete("/saleDetail/:id", saleDetailControllers.deleteSaleDetail);
router.get("/saleDetail", saleDetailControllers.getSaleDetail);
router.post("/saleDetail", saleDetailControllers.postSaleDetail);
router.put("/saleDetail/:id", saleDetailControllers.putSaleDetail);

export default router;

