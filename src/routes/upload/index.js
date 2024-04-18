import { Router } from "express";


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


