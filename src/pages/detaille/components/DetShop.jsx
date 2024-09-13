import React from 'react';
import { useParams } from 'react-router-dom';
import {  images } from '../../../constants';
import data from "../../../json/data.json"

const DetShop = () => {
    const { id } = useParams()
    let products = data.find(item => item.id == id);
    return (
        <div className='flex justify-center'>
            <div className='flex justify-center pt-[10vh] gap-[5vw] w-[70vw] '>
          <div><img src={images[products.affiche]} alt="" className='w-[30vw]' /></div>
          <div className='flex flex-col gap-6'>                                   
             <p className="text-black  text-3xl opacity-70 hover:text-red-600 " >{products.title}</p>
             <p className="text-black  text-3xl opacity-70 hover:text-red-600 " >{products.price}</p>
             <p className='text-md opacity-65 w-[35vw]'>{products.name}</p>
             <div className='flex gap-4 pt-5'>
                <button className='border border-red-600 px-5 py-2 focus:bg-red-600 focus:text-white'>S</button>
                <button className='border border-red-600 px-5 py-2 focus:bg-red-600 focus:text-white'>M</button>
                <button className='border border-red-600 px-5 py-2 focus:bg-red-600 focus:text-white'>L</button>
                <button className='border border-red-600 px-5 py-2 focus:bg-red-600 focus:text-white'>XL</button>
                <button className='border border-red-600 px-5 py-2 focus:bg-red-600 focus:text-white'>XXL</button>
             </div>
             <div className='flex gap-20 items-center pt-5 pb-8'>
                <div className='bg-[#e6e6e6]  flex w-[8vw] justify-center items-center rounded-lg '>
                    <div className='px-3 py-3 text-xl font-bold'>-</div>
                    <div className='bg-white py-2 px-4 '>1</div>
                    <div className='px-3 py-3 text-xl font-bold'>+</div>

                </div>
                <div className=' bg-black text-white px-4 py-2 rounded-2xl text-xl hover:bg-red-500'><button>ADD TO CART</button></div>
             </div>
             <div className='flex gap-9 '>
                <p className='text-gray-600'><span className='text-black text-lg'>Brand:</span> MyVendor</p>
                <p className='text-gray-600'><span className='text-black text-lg'> Categories:</span>boxy , Shirts , sleeveless</p>
             </div>
             <div className='pt-5 w-[35vw] border-t-2 '>
                <div className='pb-6 text-xl'>Description:</div>
                <p className='text-gray-400'>{products.description}</p>

             </div>
              </div>
        </div>
        </div>
    );
};

export default DetShop;