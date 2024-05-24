const express=require("express")
const app=express()
app.set("view engine",'ejs')
app.get("/",(req,resp)=>
{
   resp.render("home",{name:"sneha gupta",add:"barwani"})
})
app.listen(4000)