const express=require("express")
const cors=require("cors")
const connectdb=require("./mongodb")
const app=express()
app.use(express.json())
app.use(cors())
app.delete("/",async(req,resp)=>

    // delete=postman
    // get=frontend
{
    const conn=await connectdb()

    const data=await conn.deleteOne({rollno:req.body.rollno})
    // frontend+mongoose


    resp.send(data)
})
app.listen(7000)