import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Enable CORS for local dev
app.use(
  cors({
    origin: [
      "http://localhost:5173",


      // Enable CORS for deployed frontend
      "https://crm-mern-integration.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Handle OPTIONS preflight requests for all routes
app.options("*", cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));
