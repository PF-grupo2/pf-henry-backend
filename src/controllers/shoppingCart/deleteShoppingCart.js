import { Cart } from "../../database/index.js";

const deleteShoppingCart = async (req, res) => {
  const { id } = req.params;

  try {
    const shoppingCart = await Cart.findByPk(id);
    if (!shoppingCart)
      return res.status(404).json({ error: "Shopping cart not found" });
    const deletedShoppingCart = await Cart.update({
      status: !shoppingCart.status,
    });
    res.status(200).json(deletedShoppingCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default deleteShoppingCart;
