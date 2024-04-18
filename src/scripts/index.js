import { Product, User } from "../database/index.js";
import { products, users } from "../config/data.js";

export const loader = async () => {
  try {
    const productsDB = await Product.findAll({});
    const usersDB = await User.findAll({});
    if (productsDB.length < products.length) {
      await Product.bulkCreate(products);
    }

    if (usersDB.length > 0) {
      for (let user of usersDB) {
        const foundUser = users.find(
          (currentUser) => currentUser.email === user.email
        );
        if (!foundUser) {
          await usersDB.create(user);
          await usersDB.save();
        }
      }
    } else {
      await User.bulkCreate(users);
    }
  } catch (error) {
    console.log(error);
  }
};
