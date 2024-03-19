import axios from "axios";
import { product } from "../database/index.js";

export const loader = async () => {
  try {
    const productsDB = await product.findAll({});
    const { data } = await axios("http://localhost:5000/products");

    if (productsDB.length < data.length) {
      await product.bulkCreate(data);
    }
  } catch (error) {
    console.log(error);
  }
};
