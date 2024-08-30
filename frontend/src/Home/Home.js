import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner/Banner'
import Elements from '../Components/Elements/Elements'
import Footer from '../Components/Footer/Footer'


function Home() {
   
     
  return (
    <div className='home'>
      <Navbar/>
      <Banner/>
      <Elements/>
     
        <Footer/>
      
    </div>
  )
}

export default Home
