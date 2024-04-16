import { Product, Review } from "../../database/index.js";

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      include: [Product],
    });
    console.log(reviews);
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(404).json({ error: "Requested review was not found" });
  }
};

export default getAllReviews;
