const mongoose=require("mongoose")
const nameSchema=new mongoose.Schema({
           
     image:String,
     name:String
})

// const data=mongoose.model("students",sSchema)
// module.exports=data;

module.exports=mongoose.model("names",nameSchema)