import express from "express"
import dotenv from "dotenv"
import cors from "cors"          
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import customerRoutes from "./routes/customerRoutes.js"

dotenv.config()
connectDB()

const app = express()

// React app URL
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/customers", customerRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`))
