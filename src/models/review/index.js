import { DataTypes } from "sequelize";

export const ReviewModel = (sequelize) => {
    sequelize.define("Review", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 10,
        },
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // Product_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: "Product",
      //     key: "id",
      //   },
      // },
      // User_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: "User",
      //     key: "id",
      //   },
      // },
    });
};