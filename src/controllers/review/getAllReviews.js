import { Product, Review, User } from "../../database/index.js";

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      include: [Product, User],
    });
    console.log(reviews);
    const sortedReviews = reviews.sort((a, b) => a.id.localeCompare(b.id));
    return res.status(200).json(sortedReviews);
  } catch (error) {
    return res.status(404).json({ error: "Requested review was not found" });
  }
};

export default getAllReviews;
