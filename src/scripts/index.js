import { Product, User } from "../database/index.js";
import { products, users } from "../config/data.js";

export const loader = async () => {
  try {
    const productsDB = await Product.findAll({});
    const usersDB = await User.findAll({});
    if (productsDB.length < products.length) {
      await Product.bulkCreate(products);
    }
    if (usersDB.length < users.length) {
      await User.bulkCreate(users);
    }
  } catch (error) {
    console.log(error);
  }
};
