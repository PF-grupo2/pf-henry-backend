import { Sequelize } from "sequelize";
import { POSTGRES_URI } from "../config/index.js";
import { ProductModel } from "../models/index.js";

const conn = new Sequelize(POSTGRES_URI, { logging: false, native: false });

ProductModel(conn);

const { product } = conn.models;

export { conn, product };
