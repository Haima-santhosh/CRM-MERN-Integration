import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCustomers } from '../services/api'

export default function ViewCustomer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  useEffect(() => {
    getCustomers(token)
      .then(res => {
        const c = res.data.find(c => c._id === id);
        if (c) setCustomer(c);
      })
      .catch(err => console.error(err))
  }, [id, token]);

  if (!customer) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Customer Details</h1>
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Phone:</strong> {customer.phone}</p>

        <button onClick={() => navigate('/dashboard')} className="mt-6 w-full bg-gray-600 text-white p-2 rounded hover:bg-gray-700">

          Back to Dashboard

        </button>

      </div>
    </div>
  )
}
