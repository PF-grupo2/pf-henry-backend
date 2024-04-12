import { Cart, CartItem, Product } from "../../database/index.js";

const getAllShoppingCart = async (req, res) => {
  try {
    const user = req.user;
    console.log(user);
    const shoppingCart = await Cart.findOne({
      where: {
        UserId: user.id,
      },
      include: [CartItem],
    });
    let cartItems = [];

    for (const item of shoppingCart.CartItems) {
      const product = await Product.findByPk(item.ProductId);
      const productItem = {
        quantity: item.quantity,
        currency_id: "ARS",
        description: product.description,
        picture_url: product.images[0],
        title: product.name,
        unit_price: product.price,
        id: item.ProductId,
      };
      cartItems.push(productItem);
    }

    return res.status(200).json(cartItems);
  } catch (error) {
    return res.status(404).json({ error: "Shopping cart not found" });
  }
};

export default getAllShoppingCart;
