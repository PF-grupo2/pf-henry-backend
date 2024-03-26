import { Sequelize } from "sequelize";
import { POSTGRES_URI } from "../config/index.js";



import { ProductModel, UserModel, ReviewModel, SaleDetailModel, SaleModel } from "../models/index.js";


const conn = new Sequelize(POSTGRES_URI, { logging: false, native: false });

ProductModel(conn);
UserModel(conn);
ReviewModel(conn);
SaleModel(conn);
SaleDetailModel(conn);

const { Product, User, Review, SaleDetail, Sale } = conn.models;
export { conn, Product, User, Review, SaleDetail, Sale };

