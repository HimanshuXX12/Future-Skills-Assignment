import React, { useContext, useState } from 'react'
import './Banner.css'
import axios from 'axios';
import { ModelContext } from '../../ContextApi/Contextapi';
function Banner() {
    const [text,setext]= useState(null);
    const {data,setData}= useContext(ModelContext);
    const textHandller= async (e)=>{
            
          if(e.target.value)
          {
            setext(e.target.value);
             const res= await axios.get(`http://localhost:300/cards/${e.target.value}`);
             console.log("res",res.data);
             setData(res.data.card);

          }
          else{
            const res= await axios.get(`http://localhost:300/card`);
             console.log("res",res.data);
             setData(res.data.cards);
          }
    }

  return (
    <div className='bannered'>
        <div className='banner_block'>
            
                <h1 className='banner_text'>How can we help?</h1>
           
            <div className='input_main'>
                <input placeholder='search' id="input" onChange={textHandller}/>
               <div className='arrow_main'> <i class="bi bi-arrow-right"></i></div>
            </div>
        </div>
    </div>
  )
}

export default Banner
