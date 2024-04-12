import { DataTypes } from "sequelize";
export const CartItemsModel = (sequelize) => {
  sequelize.define("CartItem", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    ProductId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Products",
        key: "id",
      },
    },

    CartId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Carts",
        key: "id",
      },
    },
  });
};
