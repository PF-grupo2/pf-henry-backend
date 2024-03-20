import { Router } from "express";
import { authControllers } from "../../controllers/index.js";

const router = Router();

router.post("/login", authControllers.login);

export default router;
