import { Product } from "../../database/index.js";

const updateStock = async (req, res) => {
  const { id, quantity } = req.params;

  try {
    const foundProduct = await Product.findByPk(id);

    if (!foundProduct) return res.status(404).json({ error: "Product not found" });
    if(quantity>foundProduct.stock) return res.status(401).json({error: "stock insuficiente"});

    foundProduct.stock = foundProduct.stock - quantity;

    await foundProduct.save();

    res.status(200).json(foundProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default updateStock;