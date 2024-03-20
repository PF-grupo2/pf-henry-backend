import axios from "axios";
import { Product } from "../database/index.js";

export const loader = async () => {
  try {
    const productsDB = await Product.findAll({});
    const { data } = await axios("http://localhost:5000/products");
    if (productsDB.length < data.length) {
      await Product.bulkCreate(data);
    }
  } catch (error) {
    console.log(error);
  }
};
