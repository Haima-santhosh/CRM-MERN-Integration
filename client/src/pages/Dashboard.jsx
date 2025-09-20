import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import CustomerTable from '../components/CustomerTable'
import Footer from '../components/Footer'
import { getCustomers, deleteCustomer } from '../services/api'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [customers, setCustomers] = useState([])
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) return navigate('/')
    getCustomers(token)
      .then(res => setCustomers(res.data))
      .catch(err => console.log(err))
  }, [token, navigate]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure?')) return
    try {
      await deleteCustomer(id, token);
      setCustomers(customers.filter(c => c._id !== id))
    } catch (err) {
      console.error("Failed to delete customer:", err)
      alert("Delete failed")
    }
  };

  const handleEdit = (id) => navigate(`/edit-customer/${id}`)

  return (
   <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100">
       
        <Navbar />

       
        <main className="flex-1 p-4">
          <CustomerTable customers={customers} onEdit={handleEdit} onDelete={handleDelete} />
        </main>

        
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
