import { Router } from "express";
import { upload, uploadImage } from "../../helpers/imageService/index.js";

const router = Router()

router.post('/upload', upload.single('file') ,async (req, res) =>{
    try {

        if(!req.file) {
            return res.status(400).json({ error: 'no se proporciono ningun archivo' })
        }
        const imageUrl = await uploadImage(req.file)
        res.json({ imageUrl });
    } catch (error) {
        res.status(500).json({ error: 'Error al subir la imagen' });
    }
})

export default router