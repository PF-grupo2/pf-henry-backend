import { Sequelize } from "sequelize";
import { POSTGRES_URI } from "../config/index.js";

const conn = new Sequelize(POSTGRES_URI, { logging: false, native: false });

export { conn };
