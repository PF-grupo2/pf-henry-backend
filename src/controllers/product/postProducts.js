import { product } from "../../database/index.js";

const postProducts = async (req, res) => {
  const { name, description, category, images, brand, price, stock, scoreAvg, offer, status } = req.body;
  try {
    if (!name || !description || !category || !images || !brand || !price || !stock || !scoreAvg) throw Error("Falta información");

    const data = {
      name,
      description,
      category,
      images,
      brand,
      price,
      stock,
      scoreAvg,
    };
    if (offer) data.offer = offer;
    if (status) data.status = status;

    const newProduct = await product.create(data);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default postProducts;
