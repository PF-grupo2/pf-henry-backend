import { Product } from "../../database/index.js";


const deleteProducts = async (req, res) => {
 const { id } = req.params;

 try {
    const foundProduct = await Product.findByPk(id);
    if(!foundProduct) return res.status(404).json({error: 'Product not found' });
    const deletedProduct = await Product.update({ status: !foundProduct.status });
    res.status(200).json(deletedProduct)
 } catch (error) {
    res.status(500).json({error: error.message})
 }
}

export default deleteProducts;