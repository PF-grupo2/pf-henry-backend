import { Router } from "express";
import { authControllers } from "../../controllers/index.js";
import { check } from "express-validator";
import { validationMiddlewares } from "../../middlewares/index.js";
const router = Router();

router.post(
  "/login",
  [
    check("mail", "El email es obligatorio").not().isEmpty(),
    check("mail", "El email no es válido").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validationMiddlewares.fieldsValidate,
  ],
  authControllers.login
);

export default router;
