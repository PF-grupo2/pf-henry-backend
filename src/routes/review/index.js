import { Router } from "express";
import { reviewControllers } from "../../controllers/index.js";

const router = Router();

router.get('/review', reviewControllers.getAllReviews);
router.post('/review', reviewControllers.postReview);
router.delete('/review/:id', reviewControllers.deleteReviews);
router.put('/review/:id', reviewControllers.putReviews);

export default router;
