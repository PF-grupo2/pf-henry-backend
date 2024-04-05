import { Router } from "express";
import { uploadImage } from "../../helpers/imageService/index.js";


const router = Router()

router.post('/image', async (req, res) =>{
    try {

        if(!req.file) {
            return res.status(400).json({ error: 'no se proporciono ningun archivo' })
        }
        const imageUrl = await uploadImage(req.file.path)
        res.status(200).json({ imageUrl });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al subir la imagen' });
    }
})

export default router