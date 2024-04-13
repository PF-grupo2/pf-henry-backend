import { Review } from "../../database/index.js";

const putReviews = async (req, res) => {
  const { id } = req.params;
  const { score, message, status, ProductId, UserId } = req.body;

  try {
    const review = await Review.findByPk(id);
    if (!review) return res.status(404).json({ error: "Review not found" });

    if (status !== undefined && typeof status === "boolean") {
      review.status = status;
    }
    if (score) review.score = score;
    if (message) review.message = message;

    if (ProductId) review.ProductId = ProductId;
    if (UserId) review.UserId = UserId;

    await review.save();

    res.status(200).json(review);
  } catch (error) {
    res.status(404).json({ error: "Review not done" });
  }
};

export default putReviews;
