import { Product } from "../../database/index.js";
import { Op } from "sequelize";

//la funcion se encarga de traer unicamente los productos solicitados segun una logica de filtrado, busqueda por nombre y paginado.

const getAllProducts = async (req, res) => {
  let { shownElements, pageNum } = req.params; //solicitud por params para numero de elementos que se deben mostrar y numero de pagina
  const filters = req.query; //por acá llegan los filtros y la solicitud de nombre. Los filtros siempre llegan como arreglo por si se quieren seleccionar mas de uno del mismo tipo
  try {
    const data = {}; //se define el objeto data que contiene los productos encontrados e informacion relevante de la busqueda
    data.totalProducts = await Product.count();
    if(!shownElements || shownElements === "all") shownElements = data.totalProducts;//all trae todos los productos (pagina unica)
    if(!pageNum) pageNum = 1;
    data.maxIndex = shownElements *  pageNum;
    data.minIndex = data.maxIndex - shownElements;
    data.totalCoincidences = data.totalProducts;
    data.shownCoincidences = parseInt(shownElements);
    data.totalPages =  Math.ceil(data.totalProducts / shownElements);
    data.currentPage = parseInt(pageNum);
    data.status="no filters"; //informa sobre los filtros aplicados, cambia una vez, y solo si, se aplican condiciones de filtrado
    data.hasSearch = false; //informa si se ha solicitado o no una busqueda, es falso por default

    const dataTypes = await Product.describe();//trae el tipo de dato que es cada campo analizado (se usa para verificar si es un arreglo o no)
    const conditions = {status: true};//aca se guradan las condiciones de filtrado, por defecto incluye la exclusion de aquellos productos con status=false

    if(filters.search){ //de haber una solicitud de busqueda, la añade a las condiciones de filtrado
      data.hasSearch = true;
      conditions.name = { [Op.iLike]: `%${filters.search}%` }
      delete filters.search //se borra para que no genere conflictos en la funcion de filtrados de abajo, no afecta en nada por que la solicitud ya fue cargada a conditions
    }

    if(filters) { //de haber solicitudes de filtrado, agrega las condiciones
      data.status = "filtered by: ";
      for(let filter in filters){
        data.status += `${filter} `;
        if (dataTypes[filter].type === "ARRAY") { conditions[filter] = { [Op.overlap]: filters[filter] } //ejecuta si el campo por el que se filtra es un arreglo(colores,etc)
          } else { conditions[filter] = { [Op.in]: filters[filter] }} //ejecuta si el campo por el que se filtra no es un arreglo(brands,gender,etc)
      }
      data.totalCoincidences = await Product.count({where: conditions});//cuenta la total existencia de coincidencias (no toma en cuenta lo mostrado por pagina, si no la suma)
      data.totalPages =  Math.ceil(data.totalCoincidences / shownElements);
    }
    
    data.products = await Product.findAll({//hace la busqueda
          where: conditions, //en conditions se han cargado, de haberlas, todas las solicitudes de filtros y la de search (asi como la de status=true)
          limit: shownElements, //estas dos lineas se encargan de trer solo los elementos correspondientes a la pagina actual (especificada por params)
          offset: data.minIndex
    })

    if(data.products.length<shownElements) {//en caso de que una pagina muestre menos de los productos solicitados por pagina (por falta de ellos), adapta la info relevante
      data.shownCoincidences = data.products.length;
      data.maxIndex = data.totalCoincidences;
      data.minIndex = data.maxIndex - data.shownCoincidences;
    }
    
    return res.status(200).json(data); //devuelve el objeto data, conteniendo los productos filtrados y paginados en data.products
  
  } catch (error) {
    return res.status(500).json({
      message: `Error en el servidor: ${error.message}`
    });
  }
};
export default getAllProducts;

//asi, el endpoint se escribe como: "http://localhost:num_port/api/v1/products/listProducts" + "/numero de elementos por pagina" + "/numero de pagina"...
//... + "/filters?" + nombre del filtro + "[]"(corchetes) + "=" + valor del filtro + "&" + "search=" + la busqueda.

//para cada filtro se debe escribir el nombre del filtro mas los corchetes y su valor, incluso si son filtros del mismo tipo.

//se puede llamar al endpoint sin especificar ningun filtro y solo las paginas, o no especificar ni las paginas ni los filtros, pero nunca especificar los filtros sin...
//... las paginas, para tal caso  llamar a los filtros como "http://pf-henry-backend.onrender.com/api/v1/products/listProducts/all/1" + filtros.

//ejemplos de uso:
//http://pf-henry-backend.onrender.com/api/v1/products/listProducts trae toda la api
//http://pf-henry-backend.onrender.com/api/v1/products/listProducts/all/1 trae toda la api tambien
//http://pf-henry-backend.onrender.com/api/v1/products/listProducts/all/1/filters? trae toda la api tambien
//http://pf-henry-backend.onrender.com/api/v1/products/listProducts/all/1/filters?search=zapatillas busca los productos con zapatillas en el nombre
//http://pf-henry-backend.onrender.com/api/v1/products/listProducts/all/1/filters?search=zapatillas&gender[]=Hombre lo mismo pero solo para hombre
//http://pf-henry-backend.onrender.com/api/v1/products/listProducts/all/1/filters?gender[]=Hombre trae todos los productos para hombre
//http://pf-henry-backend.onrender.com/api/v1/products/listProducts/all/1/filters?gender[]=Hombre&brand[]=Nike productos marca nike para hombre
//http://pf-henry-backend.onrender.com/api/v1/products/listProducts/all/1/filters?gender[]=Hombre&brand[]=Nike&brand[]=Puma productos marca nike o puma para hombre