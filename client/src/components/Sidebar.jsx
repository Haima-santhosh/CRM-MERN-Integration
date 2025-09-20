import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <ul>
       
        <li className="mb-3">
          <Link to="/dashboard" className="hover:text-gray-300">Customers</Link>
        </li>
       
      </ul>
    </div>
  );
};

export default Sidebar;
