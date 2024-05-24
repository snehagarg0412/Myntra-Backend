const express=require("express")
const app=express()
require("./mongoose")
const studentSchema=require("./studentSchema")
app.get("/",async(req,resp)=>{


    // const data=await studentSchema.find()
    // resp.send(data)

const data=await new studentSchema({
    rollno:100,
    name:"kartik",
    marks:88
})
const entry=await data.save()
resp.send(entry)

})
app.listen(7000)
