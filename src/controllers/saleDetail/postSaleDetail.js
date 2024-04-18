import { SaleDetail } from "../../database/index.js";

const postSaleDetail = async (req, res) => {
  const { amount, price, status, title /*, Sale_id, Product_id */ } = req.body;

  try {
    if (!amount || !price || !title /* || Sale_id || Product_id */)
      throw Error({ error: "Information is missing in sale detail" });

    const data = { amount, price, status, title /*, Sale_id, Product_id */ };

    const newSaleDetail = await SaleDetail.create(data);
    res.status(200).json(newSaleDetail);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export default postSaleDetail;
