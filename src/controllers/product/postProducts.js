import { Product } from "../../database/index.js";
// import { uploadImage } from "../../helpers/imageService/index.js";

const postProducts = async (req, res) => {
  const {
    name,
    description,
    // category,
    // images,
    brand,
    price,
    stock,
    scoreAvg,
    offer,
    status,
  } = req.body;


  try {
    if (
      !name ||
      !description ||
      // !category ||
      // !images ||
      !brand ||
      !price ||
      !stock ||
      !scoreAvg
    )
      throw Error("Missing information to create the product");


      // const uploadedImages = [];
      // const imageFiles = req.files;
      // for(const image of imageFiles) {
      //   const imageUrl = await uploadImage(image);
      //   uploadedImages.push(imageUrl)
      // }

    const data = {
      name,
      description,
      // category,
      images: uploadedImages,
      brand,
      price,
      stock,
      scoreAvg,
    };
    if (offer) data.offer = offer;
    if (status) data.status = status;

    const newProduct = await Product.create(data);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default postProducts;
