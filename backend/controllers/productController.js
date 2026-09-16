import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined,
    );

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        console.log("UPLOADING:", item.path);

        try {
          const result = await cloudinary.uploader.upload(item.path, {
            resource_type: "image",
          });

          console.log("UPLOAD SUCCESS:", result.secure_url);

          return result.secure_url;
        } catch (error) {
          console.log("========== CLOUDINARY ERROR ==========");
          console.log("message:", error.message);
          console.log("http_code:", error.http_code);
          console.log("name:", error.name);
          console.log("error:", error.error);
          console.log("response:", error.response);
          console.log("======================================");

          throw error;
        }
      }),
    );

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true",
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    console.log("PRODUCT DATA:", productData);

    const product = new productModel(productData);

    await product.save();

    res.json({
      success: true,
      message: "Product Added",
      product,
    });
  } catch (error) {
    console.log("ADD PRODUCT ERROR:", error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Function for list product
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});

    res.json({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Function for removing product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);

    res.json({
      success: true,
      message: "Product Removed",
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Function for single product info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await productModel.findById(productId);

    res.json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { listProducts, addProduct, removeProduct, singleProduct };
