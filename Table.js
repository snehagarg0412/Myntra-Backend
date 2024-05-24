const express=require("express")
const app=express()
require("./mongoose")
const studentSchema=require("./studentSchema")
app.use(express.json())
const cors=require("cors")
app.use(cors())



app.post("/",async(req,resp)=>{

const data=await new studentSchema(req.body)
const entry=await data.save()

resp.send(entry)

})
app.get("/",async(req,resp)=>
{
    var data=await studentSchema.find()
    resp.send(data)
})
app.put("/",async(req,resp)=>
{
    var data=await studentSchema.updateOne({rollno:req.body.rollno},
        {$set:{name:req.body.name,marks:req.body.marks}})
        resp.send(data)
})
app.delete("/",async(req,resp)=>
{
    var data=await studentSchema.deleteOne({rollno:req.body.rollno})
    resp.send(data)

})
app.listen(7000)


