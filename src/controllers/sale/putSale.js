import { Sale } from "../../database/index.js";
import sale from "./index.js";

const putSale = async (req, res) => {
  const { id } = req.params;
  const { total, date, status, UserId } = req.body;

  try {
    const foundSale = await Sale.findByPk(id);
    if (!foundSale) throw Error({ error: "Sale not found" });

    if (status !== undefined && typeof status === "boolean") {
      sale.status = status;
    }

    if (total) foundSale.total = total;
    if (date) foundSale.date = date;

    if (UserId) foundSale.UserId = UserId;

    await foundSale.save();

    res.status(200).json(foundSale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default putSale;
