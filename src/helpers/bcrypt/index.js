import bcrypt from "bcrypt";
const { hash, compare } = bcrypt;

const hashPassword = async (password) => {
  return await hash(password, 13);
};

const comparePassword = async (password, passwordHashed) => {
  return await compare(password, passwordHashed);
};

export { hashPassword, comparePassword };
