import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getCustomers, updateCustomer } from '../services/api'

export default function EditCustomer() {
  const { id } = useParams()
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' })
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    getCustomers(token)
      .then(res => {
        const c = res.data.find(c => c._id === id);
        if (c) setCustomer({ name: c.name, email: c.email, phone: c.phone })
      })
      .catch(err => console.error(err));
  }, [id, token])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateCustomer(id, customer, token)
      alert('Customer updated successfully')
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      alert('Failed to update customer')
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Customer</h1>

        <input type="text" placeholder="Name" value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} className="w-full p-2 mb-4 border rounded" />
        
        
        <input type="email" placeholder="Email" value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} className="w-full p-2 mb-4 border rounded" />
        
        
        <input type="text" placeholder="Phone" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} className="w-full p-2 mb-4 border rounded" />
        
        
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          
          Update Customer

        </button>
      </form>
    </div>
  )
}
