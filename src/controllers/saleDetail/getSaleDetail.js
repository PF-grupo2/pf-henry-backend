import { SaleDetail } from "../../database/index.js";

const getSaleDetail = async (req, res) => {
    try {
        const saleDetail = await SaleDetail.findAll();
         res.status(200).json(saleDetail);
    } catch (error) {
         res.status(500).json({ error: "Internal server error" });
        
    }
}

export default getSaleDetail;