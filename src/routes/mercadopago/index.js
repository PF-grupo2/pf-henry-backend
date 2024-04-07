import { Router } from "express";
import { mercadoControllers } from "../../controllers/index.js";

const router = Router();

router.post("/", mercadoControllers.postMercadoSale);

export default router;