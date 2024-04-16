import { Sale } from "../../database/index.js";

const postSale = async (req, res) => {
  
  const { total, date, status, UserId } = req.body;
  console.log(req.body, "body");
  try {
    if (!total || !date || !status || !UserId) throw new Error( "Missing information to create sale");

    const data = { total, date, status, UserId };
     console.log(data, "data");
    const newSale = await Sale.create(data);
    res.status(200).json(newSale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default postSale;
