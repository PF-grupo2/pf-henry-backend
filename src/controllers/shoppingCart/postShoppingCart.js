import { ShoppingCart } from "../../database/index.js";

const shoppingCart = async (req, res) => {
  const { date, status, UserId, ProductId, productQuantity } = req.body;
   console.log(req.body, "body");
  try {
    
    if (!date ||  !UserId || !ProductId || !status || !productQuantity) throw Error("Missing information to create buy");

    

    const data = { date, status, UserId, ProductId, productQuantity};
   
    const newShoppingCart = await ShoppingCart.create(data);
    
    return res.status(200).json(newShoppingCart);
  } catch (error) {
    
    return res.status(404).json({ error: "The purchase was not created" });
  }
};

export default shoppingCart;
