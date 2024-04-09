import { Sequelize } from "sequelize";
import {
  ProductModel,
  UserModel,
  ReviewModel,
  SaleDetailModel,
  SaleModel,
  ShoppingCartModel,
} from "../models/index.js";

const { DB_DEPLOY, POSTGRES_URI } = process.env;

const conn = new Sequelize(DB_DEPLOY || POSTGRES_URI, {
  logging: false,
  native: false,
  //   dialectOptions: {
  //     ssl: {
  //       require: true,
  //     },
  //   },
});

ProductModel(conn);
UserModel(conn);
ReviewModel(conn);
SaleModel(conn);
SaleDetailModel(conn);
ShoppingCartModel(conn);

const { Product, User, Review, SaleDetail, Sale, ShoppingCart } = conn.models;

Product.belongsToMany(User, { as: "favorites", through: "product_has_user" });
User.belongsToMany(Product, { as: "favorites", through: "product_has_user" });

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

//  User.hasMany(ShoppingCart);
//  ShoppingCart.belongsTo(User);

//  Product.belongsToMany(ShoppingCart);
//  ShoppingCart.belongsToMany(Product);

export { conn, Product, User, Review, SaleDetail, Sale, ShoppingCart };
