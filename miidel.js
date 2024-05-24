const express=require("express")
const app=express()
const midd=require("./midd")
app.get("/",midd,(req,resp)=>
{
    resp.send("home page")
})
app.get("/about",(req,resp)=>
{
    resp.send("about page")
})
app.get("/service",(req,resp)=>
{
    resp.send("service page")
})
app.listen(4000)

