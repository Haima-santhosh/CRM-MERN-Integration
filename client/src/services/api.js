
import axios from "axios"


// backend url
const API_URL = "http://localhost:5000/api"

// Register user
export const registerUser = (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
}

// Login user
export const loginUser = (userData) => {
  return axios.post(`${API_URL}/auth/login`, userData)
};

// Get all customers
export const getCustomers = (token) => {
  return axios.get(`${API_URL}/customers`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// Add a new customer
export const addCustomer = (customerData, token) => {
  return axios.post(`${API_URL}/customers`, customerData, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// Update customer 
export const updateCustomer = (id, customerData, token) => {
  return axios.put(`${API_URL}/customers/${id}`, customerData, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// Delete customer 
export const deleteCustomer = (id, token) => {
  return axios.delete(`${API_URL}/customers/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}
