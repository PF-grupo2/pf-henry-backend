import { MercadoPagoConfig, Preference } from 'mercadopago';
const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });

const postMercadoSale = async (req, res)=>{
    try{
        const body = {
            items: [
                {
                id: req.body.id,
                title: req.body.name,
                description: req.body.description,
                picture_url: req.body.image,
                quantity: Number(req.body.quantity),
                unit_price: Number(req.body.price),
                currency_id: "ARS"
            }
        ],
        back_urls:{
            success: "https://github.com/PF-grupo2/pf-henry-frontend",
            failure: "https://github.com/PF-grupo2/pf-henry-frontend",
            pending: "https://github.com/PF-grupo2/pf-henry-frontend"
        }
        }
        const preference = new Preference(client);
        const result = await preference.create({ body });

        res.json({id: result.id});
    }catch{
        return res.status(500).json({
            message: `Error en el servidor`
        })
    }
}

export default postMercadoSale;