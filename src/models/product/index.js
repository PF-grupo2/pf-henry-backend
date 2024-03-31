import { DataTypes } from "sequelize";
import { ENUMS } from "../../config/index.js";
export const ProductModel = (sequelize) => {
  sequelize.define(
    "Product",
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
        values: ENUMS.brands,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM,
        values: ENUMS.genders,
        allowNull: false,
        defaultValue: "Unisex",
      },
      style: {
        type: DataTypes.ENUM,
        values: ENUMS.styles,
        allowNull: false,
      },
      size: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        validate: {
          min: 30,
          max: 50,
        },
        allowNull: false,
      },
      color: {
        type: DataTypes.ARRAY(
          DataTypes.ENUM({
            values: ENUMS.colors,
          })
        ),
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
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
