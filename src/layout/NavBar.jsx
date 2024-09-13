import React from 'react';
import { Images } from '../assets';
import { LuUserCircle } from "react-icons/lu";
import { FaShopify } from "react-icons/fa";
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <div className='flex justify-around shadow-2xl py-5 justify-items-center '>
            <div><img src={Images.logo} alt="" /></div>
            <div className='flex gap-10 text-lg'>
                <div className='active:text-red-600 hover:border-b-2 hover:border-black'><a href="" ><Link to={"/"} >Home</Link></a></div>
                <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href=""><Link to={"/shop"} >Shop</Link></a></div>
                <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href=""><Link to={"/"} >Sale</Link></a></div>
                <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href=""><Link to={"/"} >Features</Link></a></div>
                <div className='active:text-red-600  hover:border-b-2 hover:border-black'><a href=""><Link to={"/blog"} >Blog</Link></a></div>
                <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href=""><Link to={"/about"} >About</Link></a></div>
                <div className='active:text-red-600  hover:border-b-2 hover:border-black'><a href=""><Link to={"/contact"} >Contact</Link></a></div>
            </div>
            <div className='flex gap-5 text-4xl text-gray-500 opacity-1'>
                <div className='border-e-4 pe-6'><Link to={"/signin"} ><LuUserCircle /></Link></div>
                <div><FaShopify />
                </div>

            </div>
        </div>
    );
};

export default NavBar;