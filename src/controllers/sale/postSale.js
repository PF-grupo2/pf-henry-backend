import { Sale } from "../../database/index.js";

const postSale = async (req, res) => {
  const user = req.user;
  const { total, date } = req.body;

  try {
    if (!total || !date) throw Error("Missing information to create sale");

    const data = { total, date, UserId: user.id };

    const newSale = await Sale.create(data);
    res.status(200).json(newSale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default postSale;
