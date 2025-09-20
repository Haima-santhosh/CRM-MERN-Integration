import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../services/api'

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser({ name, email, password })
      alert(res.data.msg || 'Registration successful!')

      // Redirect to login
      navigate('/')
       
    } catch (err) {
      alert(err.response?.data?.msg || 'Registration failed')
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 mb-4 border rounded" />


        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}className="w-full p-2 mb-4 border rounded" />
        
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded"/>
        <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
          
          Register
          
        </button>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link className="text-blue-600" to="/">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}
