const express=require ("express")
const connectdb=require("./mongodb")
const app=express()
app.get("/",async(req,resp)=>
{
    const conn=await connectdb()
    const data=await conn.find().toArray()
    resp.send(data)
})
app.listen(4000)