import { Sequelize } from "sequelize";
import { POSTGRES_URI } from "../config/index.js";
import { ProductModel,UserModel } from "../models/index.js";
const conn = new Sequelize(POSTGRES_URI, { logging: false, native: false });

ProductModel(conn);
UserModel(conn);

const { product,user } = conn.models;
export { conn, product,user };
