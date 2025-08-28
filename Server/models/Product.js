import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  slug: { type: String, index: true },
  description: String,
  price: { type: Number, required: true },
  discountedPrice: Number,
  categories: [String],
  brand: String,
  images: [String], // Cloudinary URLs
  stock: Number,
  rating: { type: Number, default: 0 },
  reviews: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, rating: Number, text: String }],
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" }, // optional
  techStack: [String], // for B2B scraping use-case
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Product", productSchema);
