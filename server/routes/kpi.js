import express from "express";
import KPI from "../models/KPI.js";
import Product from "../models/Product.js";
const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    console.log("Fetching KPIs...");
    const kpis = await KPI.find();
    console.log("Fetched KPIs:", kpis);
    res.status(200).json(kpis);
  } catch (err) {
    console.error("Error fetching KPIs:", err);
    res.status(404).json({ message: err.message });
  }
});
// router.get("/products", async (req, res) => {
//     try {
//       console.log("Fetching products...");
//       const products = await Product.find({});
//       console.log("Fetched products:", products);
//       res.status(200).json(products);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//       res.status(404).json({ message: err.message });
//     }
//   });
  
export default router;
