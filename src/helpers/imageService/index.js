import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer';

cloudinary.config({
  cloud_name: 'CLOUD_NAME',
  api_key: 'API_KEY_CLOUD',
  api_secret: 'API_SECRET_CLOUD'
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadImage = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.buffer.toString('base64'));
    return result.secure_url;
  } catch (error) {
    throw new Error('Error uploading image to Cloudinary');
  }
};

export { upload, uploadImage };
