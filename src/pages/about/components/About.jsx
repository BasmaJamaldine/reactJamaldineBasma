import React from 'react';
import { Images } from '../../../assets';


export const About = () => {
    return (
      <div >

<div className='relative'>
                    <img src={Images.carabout} alt="" className='object-cover h-[40vh] w-[100vw]'/>
                    <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
                        <p className='font-bold text-[50px] text-[#fff] '>NEWS</p>
                    </div>
                </div>
      <div className='flex pt-14 w-full  justify-center  py-10 gap-x-10'>
        
          <div className='w-[25vw] h-[60vh] overflow-hidden '>
              <img src={Images.about1} className='w-[100%] h-[100%] hover:scale-110 duration-500'  alt="" /></div>
          <div className='flex   flex-col gap-y-5 w-[50vw] '>
              <h1 className='text-xl'>Our Story</h1>

              <p className=' text-gray-500'>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
              <p className='ps-7 border-s-2 w-[50vw]  text-gray-500 border-[#e6e6e6]'>
      Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while
      <p className='text-black text-sm p-3 font-light'>- Steve Job’s</p>
      </p>
 
      </div>
      </div>

  </div>
    );
};


