import { Op } from "sequelize";
import { Product } from "../../models/product";

const getProductByName = async (req, res) => {
    try {
        const { name } = req.query;

        if (!name) {
            return res.status(400).json({ message: "el nombre es requerido para buscar productos" });
        }

        const products = await Product.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`,
                },
            },
        });

        return products.length > 0
            ? res.status(200).json(products)
            : res.status(404).json({
                  message: "No hay coincidencias, prueba otra busqueda",
              });
    } catch (error) {
        return res.status(500).json({
            msg: `Error interno en el servidor: ${error.message}`,
        });
    }
};

export default getProductByName;
