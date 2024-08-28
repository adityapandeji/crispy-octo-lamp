import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// router.get("/products", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });
router.get("/products", async (req, res) => {
    try {
      console.log("Fetching products...");
      const products = await Product.find({});
      console.log("Fetched products:", products);
      res.status(200).json(products);
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(404).json({ message: err.message });
    }
  });
  
export default router;