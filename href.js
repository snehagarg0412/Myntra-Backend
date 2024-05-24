const express=require("express")
const app=express()
// var data=[{rollno:101,name:"sneha",marks:60},
//            {rollno:102,name:"rohit",marks:78}]
// data print krwane k lie resp.send m data likhdo

app.get("/",(req,resp)=>
{
    resp.send("<a href='/about'>about</a><br><a href='/service'>service</a>")  

})
app.get("/about",(req,resp)=>
{
    resp.send("<input type='text' placeholder='enter name'><br><a href='/contact'></a>")
})
app.get("/service",(req,resp)=>
{
    resp.send("service")
})
app.get("/contact",(req,resp)=>
{
    resp.send("contact")
}).listen(2000)