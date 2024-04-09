import { MercadoPagoConfig, Preference } from "mercadopago";
import { ACCESS_TOKEN } from "../../config/index.js";
const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN });

const postMercadoSale = async (req, res) => {
  try {
    const { items } = req.body;
    console.log(items);
    const body = {
      items,
      back_urls: {
        success: "https://github.com/PF-grupo2/pf-henry-frontend",
        failure: "https://github.com/PF-grupo2/pf-henry-frontend",
        pending: "https://github.com/PF-grupo2/pf-henry-frontend",
      },
    };
    const preference = new Preference(client);
    const result = await preference.create({ body });

    res.json({ id: result.id });
  } catch {
    return res.status(500).json({
      message: `Error en el servidor`,
    });
  }
};

export default postMercadoSale;
