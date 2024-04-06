import { MercadoPagoConfig, Preference } from "mercadopago";
import { mercadoPagoConfig } from "../../config/index.js";

const createPreference = async (req, res) => {
  const client = new MercadoPagoConfig(mercadoPagoConfig);
  //   items debe ser un array, puede ser de un producto o más
  try {
    const items = req.body;
    const body = {
      items,
      back_urls: {
        success: "https://github.com/cris-rod96",
        failure: "https://github.com/cris-rod96",
        pending: "https://github.com/cris-rod96",
      },

      auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    return res.status(200).json({ id: result.id });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export default createPreference;
