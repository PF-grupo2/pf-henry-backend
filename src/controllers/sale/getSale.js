import { Sale, SaleDetail, User } from "../../database/index.js";

const getAll = async (req, res) => {
  try {
    const sale = await Sale.findAll({
      include: [SaleDetail, User],
    });
    res.json(sale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSalesByUser = async (req, res) => {
  const { id } = req.params;
  try {
    const sales = await Sale.findAll({
      where: {
        UserId: id,
      },
      include: [SaleDetail],
    });

    return res.status(200).json(sales);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const getSalesByProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const sales = await SaleDetail.findAll({
      where: {
        ProductId: id,
      },
      include: [SaleDetail],
    });

    return res.status(200).json(sales);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export default { getAll, getSalesByUser, getSalesByProduct };
