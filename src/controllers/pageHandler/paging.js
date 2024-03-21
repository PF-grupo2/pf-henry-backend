import axios from "axios";
// import { Op } from "sequelize";

const getPage = async (req, res) => {
    const { pageNum, shownElements } = req.params;

    try {
        const maxIndex = shownElements *  pageNum;
        const minIndex = maxIndex - shownElements;
        const allProducts = await axios.get("http://localhost:3000/api/v1/products")
        const foundProducts = allProducts.data.slice(minIndex, maxIndex);
        res.status(200).json(foundProducts);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export default getPage;


// const foundProducts = await Product.findAll({
//     where: {
//       index_column: {
//         [Op.between]: [minIndex, maxIndex]
//       }
//     }
//   })
// no implemente esta opción ya que requeria modificar el modelo para que tenga un campo index y,
// sobre todo, me parecio mejor hacer el paginado basado en lo que traiga getAllProducts ya que
// pienso yo que lo mejor va a ser implementar los filtros dentro de ese metodo.

// PD: lei un metodo que usa rows y no hay que cambiar el modelo, de ultima lo pongo, pero sigo con 
// la idea de que es mejor usar la solicitud a getAllProducts