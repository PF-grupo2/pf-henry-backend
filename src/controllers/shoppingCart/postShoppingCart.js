import { Cart, CartItem } from "../../database/index.js";
const shoppingCart = async (req, res) => {
  const user = req.user;
  const { items } = req.body;

  const [shoppingCartUser, _] = await Cart.findOrCreate({
    where: {
      UserId: user.id,
    },
  });

  const cartItems = items.map((item) => ({
    quantity: item.quantity,
    ProductId: item.id,
    CartId: shoppingCartUser.id,
  }));

  await CartItem.destroy({
    where: {
      CartId: shoppingCartUser.id,
    },
  });
  await CartItem.bulkCreate(cartItems);

  return res.status(200).json(shoppingCartUser);

  // const { date, status, UserId, ProductId, productQuantity } = req.body;
  // console.log(req.body, "body");
  // try {
  //   if (!date || !UserId || !ProductId || !status || !productQuantity)
  //     throw Error("Missing information to create buy");

  //   const data = { date, status, UserId, ProductId, productQuantity };

  //   const newShoppingCart = await Cart.create(data);

  //   return res.status(200).json(newShoppingCart);
  // } catch (error) {
  //   return res.status(404).json({ error: "The purchase was not created" });
  // }
};

export default shoppingCart;
