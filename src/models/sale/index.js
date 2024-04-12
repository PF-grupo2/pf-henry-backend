import { DataTypes } from "sequelize";

export const SaleModel = (sequelize) => {
  sequelize.define(
    "Sale",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      total: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
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
    },
    {
      timestamps: false,
    }
  );
};
