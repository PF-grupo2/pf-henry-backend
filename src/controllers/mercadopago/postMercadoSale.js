import { MercadoPagoConfig, Preference } from "mercadopago";
//import { ACCESS_TOKEN } from "../../config/index.js";
const ACCESS_TOKEN = "TEST-4225693641085466-041217-8ad40e1ad21a377c6a484f94e2031966-125845891"
const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN});

const postMercadoSale = async (req, res)=>{
    try{
        
        const {items} =req.body


        console.log("Esto es lo q llega del front:",items);

        const body = {
            items
            ,
        
        back_urls:{
            success: "https://github.com/PF-grupo2/pf-henry-frontend",//cambiarlos por la url del deploy
            failure: "https://github.com/PF-grupo2/pf-henry-frontend",
            pending: "https://github.com/PF-grupo2/pf-henry-frontend"
        },
        // auto_return: "approved"
        }
        console.log(body);
        const preference = new Preference(client);
        const result = await preference.create({ body });

        res.json({id: result.id});
    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

export default postMercadoSale;