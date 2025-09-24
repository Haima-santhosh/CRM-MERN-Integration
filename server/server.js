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

// Allowed origins
const allowedOrigins = [
  "http://localhost:5173", // Local development

  process.env.FRONTEND_URL // Vercel frontend URL

].filter(Boolean);


// CORS setup
app.use(cors({

  origin: allowedOrigins, // array of allowed origins


  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));


// Body parser
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
