
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";


export const ModelContext= createContext(null);



function ModelContectProvider(props)
{
      const [data,setData]= useState([]);

       useEffect(()=>{
           caller();
       },[]);

       const caller= async ()=>{
          const res= await axios.get("http://localhost:300/card");
          setData(res.data.cards);
       }


       const value={data,setData}
   return (
    <ModelContext.Provider value={value}>
     {props.children}
   </ModelContext.Provider>
   )
}


export default ModelContectProvider