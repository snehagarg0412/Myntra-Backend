const express=require("express")
const app=express()
const midd=(req,resp,next)=>
{
    if(!req.query.age)
    {
        resp.send("please enter age")
    }
    else if(req.query.age<18)
    {
        resp.send("your under age")
    }
    else{
        next()

    }
}
app.use(midd)
app.get("/",(req,resp)=>
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
