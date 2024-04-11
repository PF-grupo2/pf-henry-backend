import { v2 as cloudinary } from 'cloudinary'
// import multer from 'multer';
import  asyncHandler  from "express-async-handler"

// const { CLOUD_NAME, API_KEY_CLOUD, API_SECRET_CLOUD } = process.env

/* 
Se dividio el modulo y se paso Multer como middleware para gestionar la carga de archivos 
directamente en el server de express.
agregando entityType podemos reutilizar este componente tanto para user como para products
*/


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY_CLOUD,
  api_secret: process.env.API_SECRET_CLOUD
});

const uploadMultiple = asyncHandler(async (req,res, next)=>{
  try {
    const images = req.files;
    console.log(images); 
    const imageUrls = [];

    for ( const image of images) {
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: "auto"
      });

      imageUrls.push(result.secure_url)
    }

    res.status(200).json({ imageUrls })

  } catch (error) {
      console.log(error);
      res.status(500).send("Internal error at: uploadMultiple");
  }
})

export default  uploadMultiple 

// const upload = multer({ dest: "uploads" });

// const uploadImage = async (files) => {
//   console.log(files)
//   try {
//     console.log("Tipo de files: ", typeof files);
//     const uploadPromises = files.map(async (file) => {
//       const result = await cloudinary.uploader.upload(file.path);
//       console.log("Soy un consolelogger: ", result)
//       return result.secure_url;
//     });

//     const imageUrls = await Promise.all(uploadPromises);
//     return imageUrls;
//   } catch (error) {
//     console.error('Error uploading image to Cloudinary: ', error);
//     throw new Error("Error uploading image to cloudinary")
//   }
// };

// export { uploadImage };
