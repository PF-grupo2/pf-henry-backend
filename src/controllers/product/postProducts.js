import { Product } from "../../database/index.js";

const postProducts = async (req, res) => {
  const {
    name,
    description,
    color,
    size,
    style,
    gender,
    images,
    brand,
    price,
    stock,
    scoreAvg,
    offer,
    status,
  } = req.body;
  try {
    if (
      !name ||
      !description ||
      !images ||
      !brand ||
      !price ||
      !stock ||
      !color ||
      !size ||
      !style ||
      !gender ||
      !scoreAvg
    )
      throw Error("Missing information to create the product");

    const data = {
      name,
      description,
      images,
      brand,
      price,
      stock,
      scoreAvg,
      color,
      size,
      style,
      gender
    };
    if (offer) data.offer = offer;
    if (status) data.status = status;

    const newProduct = await Product.create(data);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default postProducts;
