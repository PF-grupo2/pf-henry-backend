import { Review } from "../../database/index.js";

const deleteReviews = async (req, res) => {
  const { id } = req.params;

  try {
    const review = await Review.findByPk(id);
    if (!review) return res.status(404).json({ error: "Review not found" });
    const deletedReview = Review.update({ status: !review.status });
    res.status(200).json(deletedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default deleteReviews;
