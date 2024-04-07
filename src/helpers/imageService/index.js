import { v2 as cloudinary } from 'cloudinary'
// import multer from 'multer';

const { CLOUD_NAME, API_KEY_CLOUD, API_SECRET_CLOUD } = process.env

/* 
Se dividio el modulo y se paso Multer como middleware para gestionar la carga de archivos 
directamente en el server de express.
agregando entityType podemos reutilizar este componente tanto para user como para products
*/


// cloudinary.config({
//   cloud_name: CLOUD_NAME,
//   api_key: API_KEY_CLOUD,
//   api_secret: API_SECRET_CLOUD
// });

// const upload = multer({ dest: "uploads" });

const uploadImage = async (file, entityType) => {
  try {
    let folder;
    switch(entityType) {
      case "product":
        folder = "product_images";
        break;
      case "user":
        folder = "user_images";
        break;
      default:
        folder = "other_images"
    }

    console.log(CLOUD_NAME)
    const result = await cloudinary.uploader.upload(file, { folder });
    console.log("Soy un consolelogger: ", file)
    return result.secure_url;
  } catch (error) {
    throw new Error('Error uploading image to Cloudinary');
  }
};

export { uploadImage };
