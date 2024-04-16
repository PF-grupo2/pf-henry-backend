import { MercadoPagoConfig, Preference } from "mercadopago";
//import { ACCESS_TOKEN } from "../../config/index.js";
const ACCESS_TOKEN =
  "TEST-8325916074213905-041120-4055cd09b453e71a2e63f60b35942659-1756430153";
const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN });

const postMercadoSale = async (req, res) => {
  try {
    const { items } = req.body;

    console.log("Esto es lo q llega del front:", items);

    const body = {
      items,
      back_urls: {
        success: "https://github.com/PF-grupo2/pf-henry-frontend", //cambiarlos por la url del deploy
        failure: "https://github.com/PF-grupo2/pf-henry-frontend",
        pending: "https://github.com/PF-grupo2/pf-henry-frontend",
      },
      auto_return: "approved",
      notification_url: `https://pf-henry-backend-agsr.onrender.com/mercadopago/webhook`,
    };
    const preference = new Preference(client);
    const result = await preference.create({ body });

    res.json({ id: result.id });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export default postMercadoSale;
