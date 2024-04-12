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
  saleControllers.getSale
);
router.post(
  "/new",
  [check("total").not().isEmpty()],
  jwtMiddlewares.validatJWT,
  saleControllers.postSale
);

router.put("/sale", jwtMiddlewares.validatJWT, saleControllers.putSale);
router.delete(
  "/sale/id",
  jwtMiddlewares.validatJWT,
  saleControllers.deleteSale
);

export default router;
