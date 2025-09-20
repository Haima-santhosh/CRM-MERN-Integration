import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white p-4 text-center">
      &copy; {new Date().getFullYear()} CRM Application. All rights reserved.
    </footer>
  );
};

export default Footer
