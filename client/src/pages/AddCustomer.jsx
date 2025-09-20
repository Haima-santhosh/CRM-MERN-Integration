import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addCustomer } from '../services/api'

export default function AddCustomer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCustomer({ name, email, phone }, token);
      alert('Customer added successfully')
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      alert('Failed to add customer')
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Add Customer</h1>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 mb-4 border rounded" />
        
        
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-4 border rounded" />


        <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 mb-4 border rounded" />
        
        
        <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
         
          Add Customer
          
        </button>

      </form>
    </div>
  )
}
