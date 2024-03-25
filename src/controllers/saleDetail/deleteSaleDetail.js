import { SaleDetail } from "../../database/index.js";

const deleteSaleDetail = async (req, res) => {
  const { id } = req.params;

  try {
    const foundSalesDetail = await SaleDetail.findByPk(id);
    if (!deleteSale) throw Error({ error: "Sales detail not found" });
    const deletedSalesDetail = SaleDetail.update({ status: !foundSalesDetail.status });
    res.status(200).json(deletedSalesDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default deleteSaleDetail;
