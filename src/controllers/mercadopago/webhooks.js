import { response } from "express";
import { ACCESS_TOKEN } from "../../config/index.js";

const webhook = async (req, res=response) => {
  console.log(req.query);
  const paymentId = req.query.id;
  try {
    const response = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    console.log(response.ok);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export default webhook;
