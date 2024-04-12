import { DataTypes } from "sequelize";

export const CartModel = (sequelize) => {
  sequelize.define("Cart", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
  });
};
