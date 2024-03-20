import { Router } from "express";
import { userControllers } from "../../controllers/index.js";

const router = Router();

router.post("/users", userControllers.postUser);
router.put("/users/:id", userControllers.putUser);
router.put("/userDelete/:id", userControllers.deleteUser);
router.get("/users", userControllers.getUsers);

export default router;
