import { Router } from "express";
import { shoppingCartControllers } from "../../controllers/index.js";
import { jwtMiddlewares } from "../../middlewares/index.js";

const router = Router();

router.post(
  "/",
  jwtMiddlewares.validatJWT,
  shoppingCartControllers.postShoppingCart
);
router.get(
  "/",
  jwtMiddlewares.validatJWT,
  shoppingCartControllers.getAllShoppingCart
);
router.put("/:id", shoppingCartControllers.putShoppingCart);
router.delete("/:id", shoppingCartControllers.deleteShoppingCart);

export default router;
