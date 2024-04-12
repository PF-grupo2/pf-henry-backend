import { Cart } from "../../database/index.js";

const putShoppingCart = async (req, res) => {
  const { id } = req.params;
  const { amount, date, status } = req.body;

  try {
    const shoppingCart = await Cart.findByPk(id);
    if (!shoppingCart)
      return res.status(404).json({ error: "Shopping cart not found" });

    if (amount) shoppingCart.amount = amount;
    if (date) shoppingCart.date = date;
    if (status) shoppingCart.status = status;

    await shoppingCart.save();

    res.status(200).json(shoppingCart);
  } catch (error) {
    res.status(404).json({ error: "Shopping cart not done" });
  }
};

export default putShoppingCart;
