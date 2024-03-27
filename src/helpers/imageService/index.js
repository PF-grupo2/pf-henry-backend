import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer';

const { CLOUD_NAME, API_KEY_CLOUD, API_SECRET_CLOUD } = process.env


// cloudinary.config({
//   cloud_name: CLOUD_NAME,
//   api_key: API_KEY_CLOUD,
//   api_secret: API_SECRET_CLOUD
// });

const upload = multer({ dest: "uploads" });

const uploadImage = async (file) => {
  try {
    console.log(CLOUD_NAME)
    const result = await cloudinary.uploader.upload(file);
    console.log("Soy un consolelogger: ", file)
    return result.secure_url;
  } catch (error) {
    throw new Error('Error uploading image to Cloudinary');
  }
};

export { upload, uploadImage };
