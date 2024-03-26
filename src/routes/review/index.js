import { Router } from "express";
import { reviewControllers } from "../../controllers/index.js";


const router = Router();

router.post("/:id", reviewControllers.postReviews);
router.get("/", reviewControllers.getAllReviews);
router.delete("/:id", reviewControllers.deleteReviews);
router.put("/", reviewControllers.putReviews);

export default router;