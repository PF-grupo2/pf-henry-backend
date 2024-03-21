import { Sequelize } from "sequelize";
import { POSTGRES_URI } from "../config/index.js";
import { ProductModel, UserModel, ReviewModel } from "../models/index.js";
const conn = new Sequelize(POSTGRES_URI, { logging: false, native: false });

ProductModel(conn);
UserModel(conn);

ReviewModel(conn);

const { Product, User, Review } = conn.models;
export { conn, Product, User, Review };
