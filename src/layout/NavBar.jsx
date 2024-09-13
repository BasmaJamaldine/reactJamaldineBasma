import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuUserCircle } from 'react-icons/lu';
import { FaShopify } from 'react-icons/fa';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'; 
import { Images } from '../assets';

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="shadow-2xl py-5 px-4 md:px-10 flex justify-between items-center">
      {/* Logo */}
      <div>
        <img src={Images.logo} alt="Logo" />
      </div>

      {/* Main Navigation (hidden on mobile) */}
      <div className="hidden lg:flex gap-10 text-lg">
        <div className='active:text-red-600 hover:border-b-2 hover:border-black'><Link to="/">Home</Link></div>
        <div className='active:text-red-600 hover:border-b-2 hover:border-black'><Link to="/shop">Shop</Link></div>
        <div className='active:text-red-600 hover:border-b-2 hover:border-black'><Link to="/sale">Sale</Link></div>
        <div className='active:text-red-600 hover:border-b-2 hover:border-black'><Link to="/features">Features</Link></div>
        <div className='active:text-red-600 hover:border-b-2 hover:border-black'><Link to="/blog">Blog</Link></div>
        <div className='active:text-red-600 hover:border-b-2 hover:border-black'><Link to="/about">About</Link></div>
        <div className='active:text-red-600 hover:border-b-2 hover:border-black'><Link to="/contact">Contact</Link></div>
      </div>

      {/* User & Cart Icons */}
      <div className="flex items-center gap-5 text-4xl text-gray-500">
        <Link to="/signin" className="border-e-4 pe-6"><LuUserCircle /></Link>
        <FaShopify />
      </div>

      {/* Hamburger Menu Icon (mobile) */}
      <div className="lg:hidden text-3xl" onClick={toggleMenu}>
        {menu ? <HiX /> : <HiOutlineMenuAlt3 />}
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed right-0 top-0 w-3/4 bg-white h-full p-6 flex flex-col text-lg">
            {/* Close Icon Inside Menu */}
            <div className="flex justify-end mb-4">
              <HiX className="text-3xl cursor-pointer" onClick={toggleMenu} />
            </div>
            <Link to="/" className="py-2 border-b text-black" onClick={toggleMenu}>Home</Link>
            <Link to="/shop" className="py-2 border-b text-black" onClick={toggleMenu}>Shop</Link>
            <Link to="/sale" className="py-2 border-b text-black" onClick={toggleMenu}>Sale</Link>
            <Link to="/features" className="py-2 border-b text-black" onClick={toggleMenu}>Features</Link>
            <Link to="/blog" className="py-2 border-b text-black" onClick={toggleMenu}>Blog</Link>
            <Link to="/about" className="py-2 border-b text-black" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="py-2 text-black" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;