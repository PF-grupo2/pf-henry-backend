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

Product.belongsToMany(User, { as:"favorites", through:"product_has_user"});
User.belongsToMany(Product, { as: "favorites", through:"product_has_user" });

Product.hasMany(Review);
Review.belongsTo(Product);

User.hasMany(Sale);
Sale.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

SaleDetail.hasMany(Sale);
Sale.belongsTo(SaleDetail);

SaleDetail.hasMany(Product);
Product.belongsTo(SaleDetail);



export { conn, Product, User, Review, SaleDetail, Sale };

