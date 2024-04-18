import { Router } from "express";
import { mercadoControllers } from "../../controllers/index.js";
import { jwtMiddlewares } from "../../middlewares/index.js";

const ACCESS_TOKEN =
  "TEST-8325916074213905-041120-4055cd09b453e71a2e63f60b35942659-1756430153";
const router = Router();

router.post("/", jwtMiddlewares.validatJWT, mercadoControllers.postMercadoSale);

export default router;
