import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Products from './../Pages/Products';

const Header = () => {
  return (
    <header className="bg-[#0C1325] text-teal-100">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <span className="italic">Petal Whisper</span>
        </h1>

        {/* Menu */}
        <nav className="space-x-8 text-lg">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/Products" className="hover:text-white">
            Category
          </Link>
          <Link to="/AboutMe" className="hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;