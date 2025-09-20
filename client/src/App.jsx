import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import AddCustomer from "./pages/AddCustomer"        
import EditCustomer from "./pages/EditCustomer"     
import ViewCustomer from "./pages/ViewCustomer" 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-customer" element={<AddCustomer />} />
<Route path="/edit-customer/:id" element={<EditCustomer />} />
<Route path="/view-customer/:id" element={<ViewCustomer />} />
    </Routes>
  )
}

export default App
