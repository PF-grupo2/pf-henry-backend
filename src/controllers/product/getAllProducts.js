import { Product } from "../../models/product";


const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll({});
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({
            message: `Error en el servidor: ${error.message}`,
        });
    }
};

export default getAllProducts;
