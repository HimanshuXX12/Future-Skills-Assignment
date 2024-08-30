const express= require("express");
const CartModel= require("../Models/CartModel");
const Data= require("../Data");
function controller(app)
{
  app.get("/testing", async (req,res)=>{
         res.status(200).send("Working");
  })


  app.post("/cards",async (req,res)=>{
      const {title,description}= req.body;
      const   id_latest= await CartModel.findOne().sort({id:-1}).select("id");
      const newId= id_latest?id_latest+1:1;

       const data= new CartModel({
         id:newId,
         title,
         description
       })

       data.save().then(()=>{
          res.json({error:"Data Created"});
       })

  })

  app.get("/card",async (req,res)=>{

     const data= await CartModel.find({});
     res.json({sucess:true,cards:data});
      
  })


  app.get("/cards/:title",async (req,res)=>{
        const {title}= req.params;
        console.log(title);
        if(!title)
        {
             res.json({sucess:false,erro:"Title Required"});
        }
        else
        {
            const data= await CartModel.find({title});
            res.json({sucess:true,card:data});

        }
  })


  app.post("/insert",async (req,res)=>{
    console.log("DATA",Data);
    
     await CartModel.insertMany(Data).then(()=>{
         res.send("Done")
     });

       
  })


}

module.exports=controller;