import { DataTypes } from "sequelize";

export const SaleDetailModel = (sequelize) => {
  sequelize.define("SaleDetail", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
        }
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
    // Sale_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //         model: "Sale",
    //         key: "id",
    //     }
    // },
    // Product_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //         model: "Product",
    //         key: "id",
    //     }
    // },
  });
};
