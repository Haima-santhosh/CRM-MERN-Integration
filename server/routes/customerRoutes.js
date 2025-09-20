import express from "express";
import {
  createCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customerController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Add a customer 
router.post("/", authMiddleware, createCustomer);

// View all customers 
router.get("/", authMiddleware, getCustomers);

// Update a customer 
router.put("/:id", authMiddleware, updateCustomer);

// Delete a customer 
router.delete("/:id", authMiddleware, deleteCustomer);

export default router;
