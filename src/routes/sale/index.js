import { Router } from "express";
import { saleControllers } from "../../controllers/index.js";

const router = Router();

router.delete("/sale/id", saleControllers.deleteSale);
router.post("/sale/id", saleControllers.postSale);
router.get("/sale", saleControllers.getSale);
router.put("/sale", saleControllers.putSale);

export default router;
