import { SaleDetail } from "../../database/index.js";

const saveSaleDetail = async (SaleId, items) => {
  try {
    const saleDetails = items.map((item) => ({
      amount: item.quantity,
      price: item.unit_price,
      ProductId: item.id,
      SaleId,
    }));
    await SaleDetail.bulkCreate(saleDetails);
  } catch (error) {
    throw new Error("Error al crear: ", error.message);
  }
};

export default { saveSaleDetail };
