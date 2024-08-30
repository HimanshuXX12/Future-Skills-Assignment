import React, { useContext } from 'react'
import './Elements.css'
import { ModelContext } from '../../ContextApi/Contextapi';
function Elements() {
    const {data,setData}= useContext(ModelContext);
    console.log("data and setdata",data,setData);
  return (
    <div className='elements'>
      {
        data?.map((data)=> {
             return (
                <div className='element '>
                <div className='p-4'>
                   <p className='font-bold text-xl'>{data.title}</p>
                </div>
                <hr style={{ border: '1px solid  #b5aeae', }} />
                <div className='p-4'>
                   <p>{data.description}</p>
                </div>
                
             </div>
             )
        })
      }

    
      {/* <div className='element '>
         <div className='p-4'>
            <p className='font-bold'>Branches</p>
         </div>
         <hr/>
         <div className='p-4'>
            <p>Abstract Branches lets you manage ,version,and document your design in one palace.</p>
         </div>
      </div>
      
      <div className='element'>
         <div className=' p-4'>
            <p className='font-bold'>Branches</p>
         </div>
         <hr/>
         <div className='p-4'>
            <p>Abstract Branches lets you manage ,version,and document your design in one palace.</p>
         </div>
      </div> */}
    </div>
  )
}

export default Elements
