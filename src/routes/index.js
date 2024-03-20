import { Router } from "express";

const router = Router();

import postUser from "../controllers/user/postUser.js";
import putUser from "../controllers/user/putUser.js";
import deleteUser from "../controllers/user/deleteUserPut.js";
import getUsers from "../controllers/user/getUsers.js";

router.post("/users", postUser);
router.put("/users/:id", putUser);
router.put("/userDelete/:id", deleteUser);
router.get("/users", getUsers);

export default router;