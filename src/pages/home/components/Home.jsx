import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../../assets';
import { GrFormPrevious } from 'react-icons/gr';
import { MdOutlineNavigateNext } from 'react-icons/md';
import data from "../../../json/data.json"
import Slider from "react-slick";
import { images } from '../../../constants';
import blogData from "../../../json/blogData.json"

 
export const Home = () => {
    const goTo = useNavigate();
   
    const sliderRef1 = React.useRef(null); 
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
    <div className='flex flex-col lg:flex-row justify-center gap-5 mb-9 px-4 lg:px-16'>
  <div className='flex flex-col gap-5 w-full lg:w-[25vw]'>
    <div className='w-full relative overflow-hidden'>
      <img src={Images.robe} alt="" className='hover:scale-110 duration-700 w-full' />
      <button className='bg-white py-2 px-10 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%] hover:bg-[#e65540] hover:text-white'>DRESSES</button>
    </div>
    <div className='relative overflow-hidden w-full'>
      <img src={Images.lunette} alt="" className='hover:scale-110 duration-700 w-full h-[40vh]' />
      <button className='bg-white py-2 px-10 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%] hover:bg-[#e65540] hover:text-white'>SUNGLASSES</button>
    </div>
  </div>
  <div className='flex flex-col gap-5 w-full lg:w-[25vw]'>
    <div className='relative overflow-hidden w-full'>
      <img src={Images.watch} alt="" className='hover:scale-110 duration-700 w-full h-[40vh]' />
      <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%] hover:bg-[#e65540] hover:text-white'>WATCHES</button>
    </div>
    <div className='relative overflow-hidden w-full'>
      <img src={Images.shoes} alt="" className='hover:scale-110 duration-700 w-full' />
      <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%] hover:bg-[#e65540] hover:text-white'>FOOTERWEAR</button>
    </div>
  </div>
  <div className='flex flex-col gap-5 w-full lg:w-[25vw]'>
    <div className='relative overflow-hidden w-full'>
      <img src={Images.bags} alt="" className='hover:scale-110 duration-700 w-full' />
      <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%] hover:bg-[#e65540] hover:text-white'>BAGS</button>
    </div>
    <div className='relative overflow-hidden w-full'>
      <img src={Images.ass} alt="" className='hover:scale-110 duration-700 w-full h-[40vh]' />
      <button className='bg-white py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%] hover:bg-[#e65540] hover:text-white'>ACCESSORIES</button>
    </div>
  </div>
</div>
          <div className="relative w-full mb-5">
    <Slider ref={sliderRef2} className="overflow-hidden" {...settings}>
        {/* Premier slide */}
        <div className="relative flex w-[100vw] h-[80vh] items-center">
            <div className='flex w-[100%] items-center justify-center gap-5'>
                {data.slice(0, 4).map((item) => (
                    <div key={item.id} className="text-start flex flex-col">
                        <div className="relative group">
                            <img src={images[item.affiche]} alt={item.title} 
                                className="w-full sm:w-[45vw] lg:w-[21vw] h-auto transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-50 transition-opacity duration-600"></div>
                            <button
                                className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-3 py-2
                                 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 text-lg hover:bg-red-500">
                                ADD TO CART
                            </button>
                        </div>
                        <p className="text-black pt-6 text-lg opacity-70 hover:text-red-600" onClick={() => goTo(`/shop/${item.id}`)}>{item.title}</p>
                        <p className="text-black text-lg opacity-70">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Deuxième slide */}
        <div className="relative flex w-[100vw] h-[80vh] items-center">
            <div className='flex w-[100%] items-center justify-center gap-5'>
                {data.slice(4, 8).map((item) => (
                    <div key={item.id} className="text-start flex flex-col">
                        <div className="relative group">
                            <img src={images[item.affiche]} alt={item.title} 
                                className="w-full sm:w-[45vw] lg:w-[21vw] h-auto transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-50 transition-opacity duration-600"></div>
                            <button
                                className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-3 py-2
                                 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 text-lg hover:bg-red-500">
                                ADD TO CART
                            </button>
                        </div>
                        <p className="text-black pt-6 text-lg opacity-70 hover:text-red-600" onClick={() => goTo(`/shop/${item.id}`)}>{item.title}</p>
                        <p className="text-black text-lg opacity-70">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    </Slider>

    <button onClick={() => handlePrev(sliderRef2)} 
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-black opacity-55 text-3xl">
        <GrFormPrevious/>
    </button>
    <button onClick={() => handleNext(sliderRef2)} 
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-black opacity-55 text-3xl">
        <MdOutlineNavigateNext />
    </button>
</div>
    <div>
    <h2 className="text-2xl md:text-3xl font-bold m-10 text-center">
     OUR BLOG
      </h2>
  <div class="mx-8 my-10 gap-7 grid max-w-screen-xl gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
  {blogData.map((item) => (
  <div class="group cursor  w-[28vw] h-[70vh]  ">
    <div className='overflow-hidden' >
      <img src={images[item.pic]} className='transform transition-transform duration-300 hover:scale-110 w-full h-[40vh] mb-3 overflow-hidden' />
    </div>
    <div class="flex-1 overflow-hidden bg-white ">
      <h1 className=' font-semibold hover:text-[#e65540] mb-3'>{item.title}</h1>
      <p class=" text-gray-600 mb-3">{item.by}</p>
      <p class=" text-gray-600">{item.description}</p>

      </div>
    </div>
  ))}

  </div>
  </div>
    <div>
<div className="w-full py-16 bg-white text-center">

      <h2 className="text-2xl md:text-3xl font-bold mb-16">
        @ FOLLOW US ON INSTAGRAM
      </h2>


      <div className="flex flex-col md:flex-row justify-center items-center max-w-4xl mx-auto space-y-8 md:space-y-0 md:space-x-10 text-gray-700">

        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Free Delivery Worldwide</h3>
          <p className="text-gray-500 italic text-sm">
            Mirum est notare quam littera gothica
          </p>
        </div>


        <div className=" h-16 border-l border-gray-300"></div>


        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">30 Days Return</h3>
          <p className="text-gray-500 italic text-sm">
            Simply return it within 30 days for an exchange.
          </p>
        </div>


        <div className="hidden md:block h-16 border-l border-gray-300"></div>


        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Store Opening</h3>
          <p className="text-gray-500 italic text-sm">
            Shop open from Monday to Sunday
          </p>
        </div>
      </div>
    </div>
</div>
        </div>
    );
};

