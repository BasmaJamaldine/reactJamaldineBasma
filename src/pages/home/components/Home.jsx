import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../../assets';
import { GrFormPrevious } from 'react-icons/gr';
import { MdOutlineNavigateNext } from 'react-icons/md';
import data from "../../../json/data.json"
import Slider from "react-slick";
import { images } from '../../../constants';

 
export const Home = () => {
    const goTo = useNavigate();
   
    const sliderRef1 = React.useRef(null); // 
    const sliderRef2 = React.useRef(null);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
  };

  const handleNext = (sliderRef) => {
    sliderRef.current.slickNext();
  };

  const handlePrev = (sliderRef) => {
    sliderRef.current.slickPrev();
  };
  
    return (
      
        <div>
          <div className="relative w-full mb-5">
      <Slider ref={sliderRef1} className="overflow-hidden " {...settings}>
        {/* Slide 1 */}
        <div className="relative w-full h-[80vh]">
          <img 
            className="w-full h-full object-cover"
            src={Images.caroussel1}
            alt="Slide 1"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-10">
            <h3 className="text-xl text-white">Women Collection 2018</h3>
            <h1 className="text-4xl mb-4 text-white">NEW ARRIVALS</h1>
            <button className="px-8 py-2 rounded-3xl text-black bg-white hover:bg-[#e65540]">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[80vh]">
          <img
            className="w-full h-full object-cover"
            src={Images.caroussel2}
            alt="Slide 2"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-10">
            <h3 className="text-xl text-white">Women Collection 2018</h3>
            <h1 className="text-4xl mb-4 text-white">NEW ARRIVALS</h1>
            <button className="px-8 py-2 rounded-3xl text-black bg-white hover:bg-[#e65540]">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full h-[80vh]">
          <img
            className="w-full h-full object-cover"
            src={Images.caroussel3}
            alt="Slide 3"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-10">
            <h3 className="text-xl text-white">Women Collection 2018</h3>
            <h1 className="text-4xl mb-4 text-white">NEW ARRIVALS</h1>
            <button className="px-8 py-2 rounded-3xl text-black bg-white hover:bg-[#e65540]">
              SHOP NOW
            </button>
          </div>
        </div>
      </Slider>

       {/* Next  Prev buttons  */}
      <button 
       onClick={() => handlePrev(sliderRef1)} 
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 hover:bg-red-500"
      >
        <GrFormPrevious/>
      </button>
      <button 
         onClick={() => handleNext(sliderRef1)}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 hover:bg-red-500"
      >
        <MdOutlineNavigateNext />
      </button>
    </div>
          <div className='flex  justify-center justify-items-center gap-5 mb-9'>
            <div className='flex flex-col gap-5'>
           <div className='w-[25vw] relative overflow-hidden'>
            <img src={Images.robe} alt="" className='hover:scale-110 duration-700' />
           <button className='bg-white py-2 px-10 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>DRESSES</button></div>
          <div className='relative overflow-hidden'> 
            
        <img src={Images.lunette} alt="" className='w-[25vw] h-[40vh]  hover:scale-110 duration-700' />
           <button className='bg-white py-2 px-10 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>SUNGLASSES</button>
           </div>
            </div>
            <div className='flex flex-col gap-5'>
           <div  className='relative overflow-hidden'>
            <img src={Images.watch} alt=""className='w-[25vw] h-[40vh] hover:scale-110 duration-700' />
            <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white '>WATCHES</button>
            </div>
           <div className='w-[25vw] relative overflow-hidden'>
            <img src={Images.shoes} alt=""  className='hover:scale-110 duration-700'/>
            <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white '>FOOTERWEAR</button>
            </div>
            </div>
            <div className='flex flex-col gap-5'>
           <div className='w-[25vw] relative overflow-hidden'>
            <img src={Images.bags} alt="" className='hover:scale-110 duration-700' />
            <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>BAGS</button>
            </div>
           <div className='relative overflow-hidden' >
            <img src={Images.ass} alt="" className='w-[25vw] h-[40vh] hover:scale-110 duration-700' />
            <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>ASSECOIRES</button>
            </div>
            </div>
          
          </div>
          <div className="relative w-full mb-5">
                <Slider ref={sliderRef2} className="overflow-hidden " {...settings}>
                    {/* Slide 1 - Produits */}
                    <div className="relative flex w-[100vw] h-[80vh] items-center   ">
                        <div className='flex  w-[100%] items-center justify-center gap-5'>
                            {data.slice(0, 4).map((item) => (
                                <div key={item.id} className="text-start  flex flex-col  ">
                                    <div className="relative group">
                                        <img src={images[item.affiche]} alt={item.title} className="w-[21vw]" />
                                        <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-50 transition-opacity duration-600"></div>
                                        <button
                                            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-3 py-2
                                             rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 text-lg hover:bg-red-500 ">
                                            ADD TO CART
                                        </button>
                                    </div>
                                    <p className="text-black pt-6 text-lg opacity-70">{item.title}</p>
                                    <p className="text-black text-lg opacity-70 ">{item.price}</p>
                                    
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Slide 2 - Produits */}
                    <div className="relative w-full h-[80vh] items-center ">
                        <div className='flex  w-[100%] items-center justify-center gap-5'>
                            {data.slice(4,8).map((item) => (
                                <div key={item.id} className="text-start  flex flex-col ">
                                   <div className="relative group">
                                        <img src={images[item.affiche]} alt={item.title} className="w-[21vw]" />
                                        <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-50 transition-opacity duration-600"></div>
                                        <button
                                            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-3 py-2
                                             rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 text-lg hover:bg-red-500 ">
                                            ADD TO CART
                                        </button>
                                    </div>
                                    <p className="text-black pt-6 text-lg opacity-70">{item.title}</p>
                                    <p className="text-black text-lg opacity-70">{item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Slider>

       {/* Next  Prev buttons  */}
      <button 
        onClick={() => handlePrev(sliderRef2)} 
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-black opacity-55 text-3xl ">
        <GrFormPrevious/>
      </button>
      <button 
       onClick={() => handleNext(sliderRef2)} 
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-black opacity-55 text-3xl  ">
        <MdOutlineNavigateNext />
      </button>
    </div>
        </div>
    );
};

