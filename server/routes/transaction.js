import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

// router.get("/transactions", async (req, res) => {
//   try {
//     const transactions = await Transaction.find()
//       .limit(50)
//       .sort({ createdOn: -1 });

//     res.status(200).json(transactions);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });

router.get("/transactions", async (req, res) => {
    try {
      console.log("Fetching KPIs...");
      const Transactions = await Transaction.find({}).limit(50)
      .sort({ createdOn: -1 });;
      console.log("Fetched Transactions:", Transactions);
      res.status(200).json(Transactions);
    } catch (err) {
      console.error("Error fetching KPIs:", err);
      res.status(404).json({ message: err.message });
    }
  });
export default router;