import { DataTypes } from "sequelize";

export const ShoppingCartModel = (sequelize) => {
    sequelize.define("ShoppingCart", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
        allowNull: false,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ProductId: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
      },
      productQuantity: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        validate: {
          min: 1,
        },
        allowNull: true,
      },
    });
    
}
