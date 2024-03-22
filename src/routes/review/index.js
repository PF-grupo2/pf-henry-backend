import { Router } from "express";
import { reviewControllers } from "../../controllers/index.js";

const router = Router();

router.delete('/review/:id', reviewControllers.deleteReviews);
router.get('/review', reviewControllers.getAllReviews);
router.post('/review', reviewControllers.postReview);
router.put('/review/:id', reviewControllers.putReviews);

export default router;