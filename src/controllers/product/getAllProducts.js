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
    data.shownCoincidences = parseInt(shownElements);
    data.totalPages =  Math.ceil(data.totalProducts / shownElements);
    data.currentPage = parseInt(pageNum);
    data.status="no filters";


    const dataTypes = await Product.describe();
    const conditions = {}
    if(filters) {
      data.status = "filtered by: ";
      for(let filter in filters){
        data.status += `${filter} `;
        if (dataTypes[filter].type === "ARRAY") { conditions[filter] = { [Op.overlap]: filters[filter] }
          } else { conditions[filter] = { [Op.in]: filters[filter] }}
      }
      data.totalCoincidences = await Product.count({where: conditions});
    }
    
    data.products = await Product.findAll({
          where: conditions,
          limit: shownElements,
          offset: data.minIndex
    })

    if(data.products.length<shownElements) {
      data.shownCoincidences = data.products.length;
      data.maxIndex = data.totalCoincidences;
      data.minIndex = data.maxIndex - data.shownCoincidences;
    }
    
    return res.status(200).json(data);
  
  } catch (error) {
    return res.status(500).json({
      message: `Error en el servidor: ${error.message}`
    });
  }
};
export default getAllProducts;