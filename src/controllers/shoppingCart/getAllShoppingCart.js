import { ShoppingCart } from "../../database/index.js";

const getAllShoppingCart = async (req, res) => {
  try {
    const shoppingCart = await ShoppingCart.findAll();
    return res.status(200).json(shoppingCart);
  } catch (error) {
    return res.status(404).json({ error: "Shopping cart not found" });
  }
};

export default getAllShoppingCart;
