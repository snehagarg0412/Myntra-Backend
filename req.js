
const express=require("express")
const app=express()
var data=[{rollno:101,name:"sneha",marks:60},
           {rollno:102,name:"rohit",marks:78}]

app.get("/",(req,resp)=>
{
    resp.send(data)
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



