import { Sequelize } from "sequelize";
import { POSTGRES_URI } from "../config/index.js";
import { Product } from "../models/index.js";

const conn = new Sequelize(POSTGRES_URI, { logging: false, native: false });

Product(conn);

export { conn };
