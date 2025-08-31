import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <>
      <Link 
        to="/Products" 
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-350"
      >
        หน้าแนะนำ
      </Link>
    </>
  );
};

export default Button;