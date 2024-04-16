import { Router } from "express";
import { saleControllers } from "../../controllers/index.js";
import {
  jwtMiddlewares,
  securityMiddlewares,
} from "../../middlewares/index.js";
import { check } from "express-validator";

const router = Router();

router.get(
  "/list",
  jwtMiddlewares.validatJWT,
  securityMiddlewares.isAdmin,
  saleControllers.getSale.getAll
);
router.post(
  "/new",
  [check("total").not().isEmpty()],
  jwtMiddlewares.validatJWT,
  saleControllers.postSale
);

router.put("/edit/:id", jwtMiddlewares.validatJWT, saleControllers.putSale);

router.delete(
  "/delete/:id",
  jwtMiddlewares.validatJWT,
  saleControllers.deleteSale
);

router.get(
  "/users/:id",
  jwtMiddlewares.validatJWT,
  securityMiddlewares.isAdmin,
  saleControllers.getSale.getSalesByUser
);
router.get(
  "/products/:id",
  jwtMiddlewares.validatJWT,
  securityMiddlewares.isAdmin,
  saleControllers.getSale.getSalesByProduct
);

export default router;
