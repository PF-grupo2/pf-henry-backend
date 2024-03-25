import { Sequelize } from "sequelize";
import { POSTGRES_URI } from "../config/index.js";
import { ProductModel, UserModel, ReviewModel } from "../models/index.js";
import { SaleModel } from "../models/sale/index.js";
const conn = new Sequelize(POSTGRES_URI, { logging: false, native: false });

ProductModel(conn);
UserModel(conn);

ReviewModel(conn);
SaleModel(conn);

const { Product, User, Review, Sale } = conn.models;
export { conn, Product, User, Review, Sale };
