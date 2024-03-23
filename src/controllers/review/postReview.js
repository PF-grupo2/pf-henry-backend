import { Review } from "../../database";

const postReview = async (req, res) => {
  const { score, message /*, Product_id, User_id */} = req.body;

  try {
    if (!score || !message || !Product_id || !User_id) throw Error({ error: "Missing information to create the review" });

    const data = { score, message, Product_id, User_id };

    const newReview = await Review.create(data);
   res.status(200).json(newReview);
  } catch (error) {
     res.status(404).json({ error: "The review was not created" });
  }
};

export default postReview;
