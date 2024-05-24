const express=require("express")
const cors=require("cors")
const connectdb=require("./mongodb")
const app=express()
app.use(express.json())
app.use(cors())
app.post("/",async(req,resp)=>
{
    const conn=await connectdb()
    // const data=await conn.insertOne({rollno:106,name:"keshav",marks:77})
    const data=await conn.insertOne(req.body)

    resp.send(data)
})
app.listen(7000)

// broswer p only get hoga 
