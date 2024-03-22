import { Review } from "../../database/index.js";

const putReviews = async (req, res) => {
  const { id } = req.params;
  const { score, message, Product_id, User_id } = req.body;

  try {
    const review = await Review.findByPk(id);
    if (!review) return res.status(404).json({ error: "Review not found" });

    if (score) review.score = score;
    if (message) review.message = message;
    if (Product_id) review.Product_id = Product_id;
    if (User_id) review.User_id = User_id;

    await review.save();

    res.status(200).json(review);
  } catch (error) {
    res.status(404).json({ error: "Review not done" });
  }
};

export default putReviews;
