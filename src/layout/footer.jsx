import React from 'react';
import { FaFacebookF, FaGoogle, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
        <footer class="bg-[#f0f0f0] p-5">
     <div class=" mx-auto  grid  gap-y-8 gap-x-8 px-6 py-10 md:grid-cols-2 xl:grid-cols-5 xl:px-10">
    <div class="max-w-sm">
      <div class="mb-6 flex h-12 items-center p-3">
        <span class=" font-bold">GET IN TOUCH</span>
      </div>
      <div class="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a officia ea expedita!</div>
      <div class="text-gray-500">
      <ul class="flex gap-3 items-center">
       <li><a className='hover:text-[#e65540] '  href="#"><FaFacebookF /> </a></li> 
       <li><a className='hover:text-[#e65540] '  href="#"> <FaTwitter /> </a></li>  
       <li><a className='hover:text-[#e65540] '  href="#"><FaPinterestP /> </a></li>  
       <li><a className='hover:text-[#e65540] '  href="#"><FaGoogle /> </a></li> 
       <li><a className='hover:text-[#e65540] '  href="#"><FaInstagram /></a></li>  
       
       </ul>
      </div>
    </div>
    <div>
      <div class="mt-4 mb-2 font-bold xl:mb-4">CATEGORIES</div>
      <div class="text-gray-500">
      <ul class="space-y-3">
       <li><a className='hover:text-[#e65540] '  href="#">Men </a></li> 
       <li><a className='hover:text-[#e65540] '  href="#"> Women </a></li>  
       <li><a className='hover:text-[#e65540] '  href="#">Dress </a></li>  
       <li><a className='hover:text-[#e65540] '  href="#">Sunglass </a></li>   
       </ul>
      </div>
    </div>
    <div class="">
      <div class="mt-4 mb-2 font-bold xl:mb-4">Links</div>
      <nav aria-label="Footer Navigation" class="text-gray-500">
        <ul class="space-y-3">
          <li><a className='hover:text-[#e65540] '  href="#">Search</a></li>
          <li><a className='hover:text-[#e65540] ' href="#">About Us</a></li>
          <li><a className='hover:text-[#e65540] ' href="#">Contact Us</a></li>
          <li><a className='hover:text-[#e65540] ' href="#">REturns</a></li>
         
        </ul>
      </nav>
    </div>
    <div class="">
      <div class="mt-4 mb-2 font-bold xl:mb-4">Links</div>
      <nav aria-label="Footer Navigation" className="text-gray-500">
        <ul class="space-y-3">
          <li><a className='hover:text-[#e65540] '  href="#">Track Order</a></li>
          <li><a className='hover:text-[#e65540] ' href="#">Returns</a></li>
          <li><a className='hover:text-[#e65540] ' href="#">Shipping</a></li>
          <li><a className='hover:text-[#e65540] ' href="#">FAQs</a></li>
         
        </ul>
      </nav>
    </div>
    
    <div >
      <div class="mt-4 mb-2 font-bold xl:mb-4"> NEWSLETTER</div>
      <div class="flex flex-col">
        <div class="mb-4">
          <input type="email" class="bg-transparent border-b border-gray-300 mb-2 block h-14 w-full  px-4 focus:outline-none focus:border-[#e65540] transition duration-200" placeholder="Enter your email" />
          <button class="block rounded-3xl bg-black px-14 py-4 font-medium text-white">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
  
    <div class="text-center text-gray-500 my-3">
    Copyright Â© 2022 Shopify <a className='hover:text-[#e65540] '  href="#">Theme Developed by MassTechnologist</a>  All rights reserved
  </div>
</footer>

        </div>
    );
};

export default Footer;