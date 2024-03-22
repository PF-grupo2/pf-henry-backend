import { Product } from "../../database/index.js";
import { Op } from "sequelize";

const getAllProducts = async (req, res) => {
  const { shownElements, pageNum, brands, categories } = req.params;
  const maxIndex = shownElements *  pageNum;
  const minIndex = maxIndex - shownElements;
  try {
    const totalProducts = await Product.count()
    const totalPages =  Math.ceil(totalProducts / shownElements)
    let products
    let brandsArray
    let categoriesArray
    if(brands){
      brandsArray = brands.split(",")
      categoriesArray = brands.split(",")
      products = await Product.findAll({
        where: {
          brand: { [Op.in]: brandsArray },
        },
        limit: shownElements,
        offset: minIndex,
      })
      // if(categories)products = products.filter(p => categoriesArray.includes(p.category))
    }
    if(categories && !brands){
      categoriesArray = brands.split(",")
      products = await Product.findAll({
      where: {
        category: { [Op.in]: categoriesArray },
      },
      limit: shownElements,
      offset: minIndex,
    })};
    if(!brands, !categories) products = await Product.findAll({
      limit: shownElements,
      offset: minIndex,
    })
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      message: `Error en el servidor: ${error.message}`,
    });
  }
};
export default getAllProducts;
