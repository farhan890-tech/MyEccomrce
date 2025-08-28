import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    name: String,
    price: Number,
    qty: Number
  }],
  shippingAddress: {},
  paymentMethod: String,
  paymentResult: {}, // Stripe / Razorpay webhook info
  itemsPrice: Number,
  shippingPrice: Number,
  taxPrice: Number,
  totalPrice: Number,
  status: { type: String, default: "pending" }, // pending, confirmed, shipped, delivered, cancelled
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
