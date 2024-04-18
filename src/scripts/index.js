import { Product, User } from "../database/index.js";
import { products, users } from "../config/data.js";

const getUsers = async () => {
  const usersDB = await User.findAll({});
  return usersDB;
};

export const loader = async () => {
  try {
    const productsDB = await Product.findAll({});
    const usersDB = await getUsers();
    if (productsDB.length < products.length) {
      await Product.bulkCreate(products);
    }

    const masterFound = usersDB.find(
      (currentUser) => currentUser.mail === "master@gmail.com"
    );

    if (!masterFound) {
      await User.destroy({ where: {} });
      const usersDB = await getUsers();
      if (usersDB.length === 0) {
        await User.bulkCreate(users);
      } else {
        for (let user of users) {
          const foundUser = usersDB.find(
            (currentUser) => currentUser.mail === user.mail
          );
          if (!foundUser) {
            await User.create(user);
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};
