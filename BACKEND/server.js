 const express= require("express");
  const mongoose= require("mongoose");
 const app = express();
 const cors= require("cors");
 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));
 const controller= require("./Controllers/Controller");
const { Mongoose } = require("mongoose");
 controller(app);

 const env= require("dotenv").config();  

 const db_link=`mongodb+srv://himanshuee20a1358:tX0PqE96czKdi6bL@cluster0.2ekj8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const port= process.env.PORT || 300;

mongoose.connect(db_link).then(()=>{
   console.log("Database is connected");
}).catch((err)=>{
      console.log(err);
});

 app.listen(port,()=>{
     console.log("Server running at port ",port);
 })