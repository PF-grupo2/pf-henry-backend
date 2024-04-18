import { Review, Product, User } from "../../database/index.js";

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

const getReviewsByProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const reviews = await Review.findAll({
      where: {
        ProductId: id,
      },
      include: [User]
    });

    const sortReviews = reviews.sort((a, b) => a.id.localeCompare(b.id));

    res.status(200).json(sortReviews)
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
    
  }
}

export default { getReviewsByUser, getReviewsByProduct };


