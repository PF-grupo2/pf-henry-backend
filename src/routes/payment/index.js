import { Router } from "express";
import { preferenceControllers } from "../../controllers/index.js";

const router = Router();

router.post("/create-preference", preferenceControllers.createPreference);

export default router;
