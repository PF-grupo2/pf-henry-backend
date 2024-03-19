import { DataTypes } from "sequelize";
export const ProductModel = (sequelize) => {
  sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      category: {
        type: DataTypes.ENUM,
        values: ["Hombre", "Mujer", "Adulto", "Infantil"],
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        validate: {
          isArray: true,
          isUrl: (value) => {
            const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
            for (let i = 0; i < value.length; i++) {
              if (!urlRegex.test(value[i])) {
                throw new Error(
                  "El valor en la posición " + i + " no es una URL válida"
                );
              }
            }
          },
        },
      },

      brand: {
        type: DataTypes.ENUM,
        values: [
          "Puma",
          "Nike",
          "Reebok",
          "Adidas",
          "Asics",
          "Merrell",
          "New Balance",
          "Salomon",
          "Mizuno",
          "Brooks",
          "Timberland",
          "Skechers",
          "Columbia",
          "Hoka One One",
          "Keen",
          "Under Armour",
        ],
      },
      price: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: false,
        validate: {
          min: 1.0,
        },
      },

      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },

      scoreAvg: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },

      offer: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
