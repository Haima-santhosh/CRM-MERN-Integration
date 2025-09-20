import Customer from "../models/Customer.js";

export const createCustomer = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const customer = new Customer({ name, email, phone });
    await customer.save();
    res.json({ msg: "Customer added", customer });
  } catch (err) {
    res.status(500).json({ msg: "Error adding customer" });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching customers" });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Customer.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ msg: "Customer updated", updated });
  } catch (err) {
    res.status(500).json({ msg: "Error updating customer" });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    await Customer.findByIdAndDelete(id);
    res.json({ msg: "Customer deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Error deleting customer" });
  }
};
