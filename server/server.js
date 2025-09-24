import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Simple CORS setup




// Allow local dev and frontend deployed URL


const allowedOrigins = [
  "http://localhost:5173",

  // set this in Render env to your Vercel URL

  process.env.FRONTEND_URL 


].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

// Body parser
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/customers", customerRoutes)

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
