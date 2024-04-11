import { Router } from "express";
// import { uploadImage } from "../../helpers/imageService/index.js";

import  uploadMultiple  from "../../helpers/imageService/index.js";

import multer from 'multer';

const route = Router()


//configurar multer

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage })



route.post("/theImages", upload.array("images"), uploadMultiple);


export default route



// router.post('/image', async (req, res) =>{
//     try {
//         console.log("En la puerta del try: ", req.files)
//         if(!req.files || req.files.length === 0 ) {
//             return res.status(400).json({ error: 'no se proporciono ningun archivo' })
//         }
//         const imageUrls = await Promise.all(req.files.map(async file => {
//             const imageUrl = await uploadImage(file.path);
//             return imageUrl
//         }))
//         console.log(req.files)
//         res.status(200).json({ imageUrls });
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ error: 'Error al subir la imagen' });
//     }
// })

// export default router   