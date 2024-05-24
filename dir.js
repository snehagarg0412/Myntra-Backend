const express=require("express")
const path=require("path")
const app=express()
const fpath=path.join(__dirname,"data")

// app.use(express.static(fpath))
// when we not use extension then use .html in file


app.get("/",(req,resp)=>
{
    resp.sendFile(fpath+"/home.html")
})
app.get("/service",(req,resp)=>
{
    resp.sendFile(fpath+"/service.html")
})

app.get("/about",(req,resp)=>
{
    resp.sendFile(fpath+"/about.html")
})

app.get("*",(req,resp)=>
{
    resp.sendFile(fpath+"/page not found.html")
})


app.listen(3000)