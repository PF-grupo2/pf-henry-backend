import { Sale } from "../../database/index.js";

const getSale = async (req, res) => {
    try {
        const sale = await Sale.findAll();
        res.json(sale);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default getSale;