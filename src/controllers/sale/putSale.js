import { Sale } from "../../database/index.js";

const putSale = async (req, res) => {
    const { id } = req.params;
    const { total, date, status, User_id } = req.body;

    try {
        const foundSale = await Sale.findByPk(id);
        if(!foundSale) throw Error({ error: "Sale not found" });

        if(total) foundSale.total = total;
        if(date) foundSale.date = date;
        if(status) foundSale.status = status;
        if(User_id) foundSale.User_id = User_id;

        await foundSale.save();

        res.status(200).json(foundSale);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default putSale;