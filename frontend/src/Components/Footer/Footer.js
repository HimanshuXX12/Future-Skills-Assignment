import React from 'react'
import './Footer.css'
import image_logo from '../../Assests/Screenshot 2024-08-29 153942.png'
function Footer() {
  return (
    <div className='bg-black cursor-pointer'>
          <div className='footer'>
        <div className='flex flex-col gap-8'>
            <div className=' text-white font-bold text-2xl cursor-pointer'>Abstract</div>
            <div className='text-lg text-white font-normal cursor-pointer'>Branches</div>
        </div>
      <div className='gap-4 flex flex-col cursor-pointer'>
            <div className='font-bold text-2xl cursor-pointer'>Resources</div>
            <div className='cursor-pointer'>
                <div>Blog</div>
                <div>Help Center</div>
                <div>Release Notes</div>
                <div>Status</div>
            </div>
      </div>
      <div className='flex flex-col gap-4 cursor-pointer'>
        <div className='font-bold text-2xl cursor-pointer'>Community</div>
            <div>
                <div>Twitter</div>
                <div>Linkdein</div>
                <div>Facebook</div>
                <div>Dribble</div>
                <div>Podcast</div>
            </div>
      </div>
      <div className='flex flex-col gap-4 cursor-pointer'>
         <div className='font-bold text-2xl cursor-pointer'>Company</div>
         <div>
            <div>About Us</div>
            <div>Careers</div>
            <div>Legal</div>
         </div>
         <div>
            <div className='font-bold text-xl'>Contact US</div>
            <div>info@abstract.com</div>
         </div>
      </div>

      <div className='flex flex-col cursor-pointer'>
           <div className='basis-1/2 cursor-pointer'></div>
          <div className='basis-1/2 flex flex-col flex-end cursor-pointer'>
          <div>
              <img src={image_logo}/>
            </div>
            <div>
               <span>Copyright 2022 Abstract Studio Design,Inc.</span><br/>
               <span>All right reserved</span>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
