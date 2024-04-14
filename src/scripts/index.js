import { Product } from "../database/index.js";
import { products } from "../config/data.js";

export const loader = async () => {
  try {
    const productsDB = await Product.findAll({});
    if (productsDB.length < products.length) {
      await Product.bulkCreate(products);
    }
  } catch (error) {
    console.log(error);
  }
};
