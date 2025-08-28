import { Router } from "express";
import Product from "../models/Product.js";

const router = Router();

// list
router.get("/", async (_req, res) => {
  const items = await Product.find().sort({ createdAt: -1 });
  res.json(items);
});

// single by slug
router.get("/:slug", async (req, res) => {
  const item = await Product.findOne({ slug: req.params.slug });
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
});

export default router;
