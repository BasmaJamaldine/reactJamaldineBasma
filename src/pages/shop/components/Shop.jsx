import React from 'react';
import { Images } from '../../../assets';
import { useNavigate } from 'react-router-dom';

export const Shop = () => {
    const goTo = useNavigate();
    return (
        <div>
           <div className="relative w-full ">
          <img className="w-full h-[40vh] object-cover"
            src={Images.shop}/>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-10">
            <h3 className="text-[4em] font-bold text-white">Products</h3>
            </div>
            </div>
        </div>
    );
};

