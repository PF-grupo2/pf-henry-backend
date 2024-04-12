import { Cart } from "../../database/index.js";

const putShoppingCart = async (req, res) => {
  const { id } = req.params;

  const { date, status, UserId, ProductId, productQuantity } = req.body;


  try {
    const shoppingCart = await Cart.findByPk(id);
    if (!shoppingCart)
      return res.status(404).json({ error: "Shopping cart not found" });


    if (status !== undefined && typeof status === "boolean") {
      shoppingCart.status = status; 
    }
    if (date) shoppingCart.date = date;
    
    if (UserId) shoppingCart.UserId = UserId;
    if (ProductId) shoppingCart.ProductId = ProductId;
    if (productQuantity) shoppingCart.productQuantity = productQuantity;


    await shoppingCart.save();

    res.status(200).json(shoppingCart);
  } catch (error) {
    res.status(404).json({ error: "Shopping cart not done" });
  }
};

export default putShoppingCart;
