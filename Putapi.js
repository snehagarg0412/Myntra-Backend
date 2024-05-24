const express=require("express")
const cors=require("cors")
const connectdb=require("./mongodb")
const app=express()
app.use(express.json())
app.use(cors())
app.put("/",async(req,resp)=>
    // postman=put
// get=frontend
{
    const conn=await connectdb()

    //const data=await conn.updateOne({rollno:110},{$set:{name:"utkarsh",marks:8}})
    // frontend s chala+monggose
    const data=await conn.updateOne({rollno:req.body.rollno},{$set:req.body})
    // postman +monggose


    resp.send(data)
})
app.listen(7000)

// no of filed set nhi kr skte ur type =mongoose