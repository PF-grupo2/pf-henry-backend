import { Sale } from "../../database/index.js";

const deleteSale = async (req, res) => {
    const { id } = req.params;

    try {
        const foundSale = await Sale.findByPk(id);
        if(!foundSale) res.status(404).json({ error: "Sale not found" });
        const deletedSale = await foundSale.update({ status: !foundSale.status }, { where: { id: id }});
        res.status(200).json(deletedSale);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default deleteSale;