import React from "react"
import { useNavigate } from "react-router-dom"

const CustomerTable = ({ customers, onDelete }) => {
  const navigate = useNavigate()

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Customers Table</h2>
        <button
          onClick={() => navigate("/add-customer")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Customer
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow-md">
          <thead className="bg-gray-200">

            <tr>
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>

          </thead>

          <tbody>

            {customers.map((c, index) => (
              <tr key={c._id} className="text-center hover:bg-gray-100">
                <td className="py-2 px-4 border">{index + 1}</td>
                <td className="py-2 px-4 border">{c.name}</td>
                <td className="py-2 px-4 border">{c.email}</td>
                <td className="py-2 px-4 border">{c.phone || "-"}</td>
                <td className="py-2 px-4 border space-x-2">


                  <button onClick={() => navigate(`/view-customer/${c._id}`)} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                    
                    View

                  </button>


                  <button onClick={() => navigate(`/edit-customer/${c._id}`)} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600" >
                    
                    Edit

                  </button>


                  <button onClick={() => onDelete(c._id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                    
                    
                    Delete


                  </button>


                </td>
              </tr>
            ))}

            
            {customers.length === 0 && (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CustomerTable
