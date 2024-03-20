import { Product } from "../../database/index.js";

const putProducts = async (req, res) => {
  const { id } = req.params;
  const { name, description, category, images, brand, price, stock, scoreAvg, offer, status } = req.body;

  try {
    const foundProduct = await Product.findByPk(id);
    if (!foundProduct) return res.status(404).json({ error: "Product not found" });

    if (name) foundProduct.name = name;
    if (description) foundProduct.description = description;
    if (category) foundProduct.category = category;
    if (images) foundProduct.images = images;
    if (brand) foundProduct.brand = brand;
    if (price) foundProduct.price = price;
    if (stock) foundProduct.stock = stock;
    if (scoreAvg) foundProduct.scoreAvg = scoreAvg;
    if (offer) foundProduct.offer = offer;
    if (status) foundProduct.status = status;

    await foundProduct.save();

    res.status(200).json(foundProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default putProducts;
