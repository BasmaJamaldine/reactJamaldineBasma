import React from 'react';
import { Images } from '../../../assets';


const Contact = () => {
    return (
        <div className='w-full'>
         <div className="relative w-full h-[30vh]">
          <img 
            className="w-full h-full object-cover"
            src={Images.carabout}alt="contact"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-10">
            <h3 className="text-5xl text-white">Contact</h3>
          </div>
        </div>
        <div className='flex justify-center items-center w-full h-[80vh] p-11 gap-9'>
        <div >
        <iframe className='w-[50vw] h-[70vh]' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6950177.510377394!2d-7.082050000000001!3d31.792299999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sfr!2sma!4v1715947932571!5m2!1sfr!2sma"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='flex flex-col w-[50vw] h-full'>
          
          <h3 className='text-2xl mb-6'>Send us your message</h3>
          <div className='flex flex-col gap-4 h-full'>
           <input type="nom" className=" border ps-6 mb-2 h-[30%] w-[90%]  " placeholder="Name" />
          <input type="email" className=" border ps-6 mb-2 h-[30%]  w-[90%]  " placeholder=" Email" />
          <input type="phone" className=" border ps-6 mb-2 h-[30%]  w-[90%] " placeholder="Phone" />
          <textarea className=" border ps-6 mb-2 h-[80%] w-[90%] " placeholder="message"></textarea>
      
          </div>
          
    <button class="block w-40 rounded-3xl m-2 bg-black px-10 py-2 font-medium text-white">Send</button> 
        </div>
        </div>
        </div>
    );
};

export default Contact;

