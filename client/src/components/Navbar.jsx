import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {

    // clear token

    localStorage.removeItem('token') 

// redirect to login page

    navigate('/')
  }

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-3xl mx-auto font-extrabold p-3">Customers List</h1>
      
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
        
        
        Logout

      </button>
      
    </div>
  )
}

export default Navbar
