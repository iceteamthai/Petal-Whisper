import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, children, className = "" }) => {
  return (
    <Link
      to={to}
      className={`px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
