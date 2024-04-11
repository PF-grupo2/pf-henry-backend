import { User } from "../../../database/index.js";

const existUser = async (mail = "") => {
  const userFound = await User.findOne({
    where: {
      mail,
    },
  });
  if (userFound) throw new Error("El mail ingresado no está disponible");
};

export default { existUser };
