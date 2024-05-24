const mongoose=require("mongoose")
const sSchema=new mongoose.Schema({
           
        rollno:Number,
        name:String,
        marks:Number
})

// const data=mongoose.model("students",sSchema)
// module.exports=data;

module.exports=mongoose.model("students",sSchema)