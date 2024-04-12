import { DataTypes } from "sequelize";

export const SaleDetailModel = (sequelize) => {
  sequelize.define("SaleDetail", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        min: 0,
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    SaleId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "Sales",
        key: "id",
      },
    },
    ProductId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "Products",
        key: "id",
      },
    },
  });
};
