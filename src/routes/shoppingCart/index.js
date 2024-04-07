import { Router } from "express";
import { shoppingCartControllers } from "../../controllers/index.js";

const router = Router();

router.post("/", shoppingCartControllers.postShoppingCart);
router.get("/", shoppingCartControllers.getAllShoppingCart);
router.put("/:id", shoppingCartControllers.putShoppingCart);
router.delete("/:id", shoppingCartControllers.deleteShoppingCart);

export default router;