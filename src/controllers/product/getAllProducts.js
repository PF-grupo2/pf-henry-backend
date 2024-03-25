import { Product } from "../../database/index.js";
import { Op } from "sequelize";

const getAllProducts = async (req, res) => {
  let { shownElements, pageNum } = req.params;
  const filters = req.query;
  try {
    const data = {};
    data.totalProducts = await Product.count();
    if(!shownElements || shownElements === "all") shownElements = data.totalProducts;
    if(!pageNum) pageNum = 1;
    data.maxIndex = shownElements *  pageNum;
    data.minIndex = data.maxIndex - shownElements;
    data.totalCoincidences = data.totalProducts;
    data.totalPages =  Math.ceil(data.totalProducts / shownElements);
    data.currentPage = pageNum;
    data.status="no filters";

    const conditions = {}
    if(filters) {
      data.status = "filters: ";
      for(let filter in filters){
        data.status += `${filter} `;
        conditions[filter] = { [Op.in]: filters[filter] }
      }
      data.totalCoincidences = await Product.count({where: conditions});
    }
    
    data.products = await Product.findAll({
          where: conditions,
          limit: shownElements,
          offset: data.minIndex
    })

    if(data.maxIndex>data.totalCoincidences) data.maxIndex = data.totalCoincidences;
    
    return res.status(200).json(data);
  
  } catch (error) {
    return res.status(500).json({
      message: `Error en el servidor: ${error.message}`,
    });
  }
};
export default getAllProducts;



// let brandsArray
// let categoriesArray


// if(brands){
//   data.status="only brands"
//   brandsArray = brands.split(",");
//   data.products = await Product.findAll({
//     where: {
//       brand: { [Op.in]: brandsArray },
//     },
//     limit: shownElements,
//     offset: data.minIndex,
//   })
//   if(categories){
//     categoriesArray = categories.split(",");
//     data.products = data.products.filter(p => categoriesArray.includes(p.category));
//     data.totalCoincidences = await Product.count({where: {brand: { [Op.in]: brandsArray }} && {category: { [Op.in]: categoriesArray }}})
//     data.status="brands and categories"
//   } else {data.totalCoincidences = await Product.count({where: {brand: { [Op.in]: brandsArray }}})};
//   data.totalPages =  Math.ceil(data.totalCoincidences / shownElements);
// }
// if(categories && !brands){
//   categoriesArray = categories.split(",");
//   data.products = await Product.findAll({
//   where: {
//     category: { [Op.in]: categoriesArray },
//   },
//   limit: shownElements,
//   offset: minIndex,
//   })
//   data.totalCoincidences = data.products.length
//   data.totalCoincidences = await Product.count({where: {category: { [Op.in]: categoriesArray }}})
//   data.totalPages =  Math.ceil(data.totalCoincidences / shownElements);
//   data.status="only categories"
// };
// if(!brands && !categories) data.products = await Product.findAll({
//   limit: shownElements,
//   offset: data.minIndex,
// })