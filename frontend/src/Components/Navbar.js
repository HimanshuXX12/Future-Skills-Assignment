import React from 'react'
import './Navbar.css'
import image_logo from '../Assests/Screenshot 2024-08-29 153942.png'
function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar_head'>
         <div className='navbar_head'>
            <img src={image_logo}/>
            <div className='help_center'>Abstract |</div>
         </div>
         <div className='help_center'>
            Help Center
         </div>
     
      </div>
      <div className='navbar-tail'>
         <button className='submit_btn'>Submit a request</button>
      </div>
      
    </div>
  )
}

export default Navbar
