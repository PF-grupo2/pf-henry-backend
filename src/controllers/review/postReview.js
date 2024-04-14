import { Review } from "../../database/index.js";

const postReview = async (req, res) => {
  const { score, message, status, ProductId, UserId } = req.body;
  console.log(req.body);
  try {
    if (!score || !message || !status || !ProductId || !UserId) throw Error({ error: "Missing information to create the review" });

    const data = { score, message, status, ProductId, UserId };
    console.log(data, "data");
    const newReview = await Review.create(data);
    res.status(200).json(newReview);
  } catch (error) {
    res.status(404).json({ error: "The review was not created" });
  }
};

export default postReview;
