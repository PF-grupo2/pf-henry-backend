import { Sequelize } from "sequelize";
import {
  ProductModel,
  UserModel,
  ReviewModel,
  SaleDetailModel,
  SaleModel,
  CartModel,
  CartItemsModel,
} from "../models/index.js";
import { DATABASE } from "../config/index.js";

const conn = new Sequelize(DATABASE.URI, DATABASE.CONFIG);

ProductModel(conn);
UserModel(conn);
ReviewModel(conn);
SaleModel(conn);
SaleDetailModel(conn);
CartModel(conn);
CartItemsModel(conn);

const { Product, User, Review, SaleDetail, Sale, Cart, CartItem } = conn.models;

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

User.hasMany(Cart);
Cart.belongsTo(User);

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);

export { conn, Product, User, Review, SaleDetail, Sale, Cart, CartItem };
