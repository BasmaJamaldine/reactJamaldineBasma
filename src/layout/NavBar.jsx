import React from 'react';
import { Images } from '../assets';
import { LuUserCircle } from "react-icons/lu";
import { FaShopify } from "react-icons/fa";



const NavBar = () => {
    return (
        <div className='flex justify-around shadow-2xl py-5 justify-items-center'>
            <div><img src={Images.logo} alt="" /></div>
            <div className='flex gap-10 text-lg'>
                <div className='active:text-red-600 hover:border-b-2 hover:border-black'><a href="" >Home</a></div>
                <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href="">Shop</a></div>
                <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href="">Sale</a></div>
                <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href="">Features</a></div>
                <div className='active:text-red-600  hover:border-b-2 hover:border-black'><a href="">Blog</a></div>
                <div className=' active:text-red-600 hover:border-b-2 hover:border-black'><a href="">About</a></div>
                <div className='active:text-red-600  hover:border-b-2 hover:border-black'><a href="">Contact</a></div>
            </div>
            <div className='flex gap-5 text-4xl text-gray-500 opacity-1'>
                <div className='border-e-4 pe-6'><LuUserCircle /></div>
                <div><FaShopify />
                </div>

            </div>
        </div>
    );
};

export default NavBar;