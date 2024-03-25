import { Sale } from "../../database/index.js";

const postSale = async (req, res) => {
  const { total, date, status, User_id  } = req.body;

  try {
    if (!total || !date || !status || User_id) throw Error("Missing information to create sale");

    const data = { total, date, User_id };
    if (status) data.status = status;

    const newSale = await Sale.create(data);
    res.status(200).json(newSale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default postSale;
