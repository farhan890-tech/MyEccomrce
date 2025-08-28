import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = Router();

// register
router.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(409).json({ message: "Email in use" });
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, passwordHash, name });
  res.json({ id: user._id, email: user.email });
});

// login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });
  const token = jwt.sign({ sub: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, email: user.email, name: user.name });
});

export default router;
