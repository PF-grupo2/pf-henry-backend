import { Review, Product } from "../../database/index.js";

const getReviewsByUser = async (req, res) => {
  const { id } = req.params;
  try {
    const reviews = await Review.findAll({
      where: {
        UserId: id,
      },
      include: [Product]
    });

    const sortedReviews = reviews.sort((a, b) => a.id.localeCompare(b.id));

    return res.status(200).json(sortedReviews);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export default { getReviewsByUser };