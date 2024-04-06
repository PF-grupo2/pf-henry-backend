import { Router } from "express";
import { reviewControllers } from "../../controllers/index.js";

/*
import {
  jwtMiddlewares,
  securityMiddlewares,
} from "../../middlewares/index.js";
*/

const router = Router();

router.get("/review", reviewControllers.getAllReviews);
router.post("/review", reviewControllers.postReview);
router.delete("/review/:id", reviewControllers.deleteReviews);
router.put("/review/:id", reviewControllers.putReviews);

// Middleware Implementation

/*
router.post("/review", jwtMiddlewares.validatJWT, reviewControllers.postReview);
router.delete(
  "/review/:id",
  jwtMiddlewares.validatJWT,
  reviewControllers.deleteReviews
);
router.put(
  "/review/:id",
  jwtMiddlewares.validatJWT,
  reviewControllers.putReviews
);
*/
export default router;
