import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../services/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password })

      // Save JWT
      localStorage.setItem('token', res.data.token)

     // Redirect to dashboard
      navigate('/dashboard')
      
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed')
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <input  type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-4 border rounded" />
        
        
        <input  type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded" />
        
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Login</button>
        
        <p className="mt-4 text-center">
          Don't have an account? <Link className="text-blue-600" to="/register">Register</Link>
        </p>

      </form>
    </div>
  )
}
