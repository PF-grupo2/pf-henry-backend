import { MercadoPagoConfig, Preference } from "mercadopago";
import { Sale,User } from "../../database/index.js";
import { response } from "express";
import { saleHelpers,emailHelpers } from "../../helpers/index.js";
//import { ACCESS_TOKEN } from "../../config/index.js";

const ACCESS_TOKEN =
  "TEST-8325916074213905-041120-4055cd09b453e71a2e63f60b35942659-1756430153";
const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN });

const postMercadoSale = async (req, res = response) => {
  const { id: UserId } = req.user;
    const foundUser = await User.findByPk(UserId);
  try {
    const { items } = req.body;

    const body = {
      items,
      back_urls: {
        success: "https://shoe-kingdom-ae164.web.app/sale-success", //cambiarlos por la url del deploy
        failure: "https://shoe-kingdom-ae164.web.app/",
        pending: "https://shoe-kingdom-ae164.web.app/",
      },
      auto_return: "approved",
    };
    const preference = new Preference(client);
    const result = await preference.create({ body });

    const total = items.reduce((acc, current) => {
      return (acc += current.unit_price * current.quantity);
    }, 0);

    const newSale = await Sale.create({
      total,
      date: Date.now(),
      UserId,
    });

    await saleHelpers.saveSaleDetail(newSale.id, items);
        emailHelpers.saleNotification(foundUser.mail, foundUser.name, items);
    res.json({ id: result.id });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

export default postMercadoSale;
