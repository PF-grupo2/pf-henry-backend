import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../config";

const { sign, verify } = jwt;

const generateToken = (payload) => {
  return sign(payload, SECRET_KEY, { expiresIn: "3h" });
};

export { generateToken };
