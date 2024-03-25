import { SaleDetail } from "../../database/index.js";

const putSaleDetail = async (req, res) => {
  const { id } = req.params;
  const { amount, price, status, Sale_id, Product_id } = req.body;

  try {
    const foundSalesDetail = await SaleDetail.findByPk(id);
    if (!foundSalesDetail) throw Error({ error: "Sales details were not found" });
    if (amount) foundSalesDetail.amount = amount;
    if (price) foundSalesDetail.price = price;
    if (status) foundSalesDetail.status = status;
    if (Sale_id) foundSalesDetail.Sale_id = Sale_id;
    if (Product_id) foundSalesDetail.Product_id = Product_id;

    await foundSalesDetail.save();
    res.status(200).json(foundSalesDetail);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export default putSaleDetail;
