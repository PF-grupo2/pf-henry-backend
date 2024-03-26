import { DataTypes } from "sequelize";

export const SaleModel = (sequelize) => {
  sequelize.define(
    "Sale",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
        allowNull: false,
      },
    //   User_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: "User",
    //       key: "id",
    //     },
    //   },
    },
    {
      timestamps: false,
    }
  );
};
