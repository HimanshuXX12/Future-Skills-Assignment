
const mongoose= require("mongoose");

const Schema= mongoose.Schema({
    id:{
         type:Number,
         unique:true
    },
    title:{
        type:String,

    },
    description:{
         type:String,
         
    }
});


const Model= mongoose.model("CardModel",Schema);

module.exports=Model;