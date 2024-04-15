import { Review } from "../../database/index.js";

const postReview = async (req, res) => {
  const { score, message, ProductId, UserId } = req.body;
  console.log(req.body);
  try {
    if (!score || !message || !ProductId || !UserId) throw new Error("Missing information to create the review");

    const data = { score, message, ProductId, UserId };
    console.log(data, "data");
    const newReview = await Review.create(data);
    return res.status(200).json(newReview);
  } catch (err) {
    console.log(err);
    return res.status(404).json({ error: err.message });
  }
};

export default postReview;
