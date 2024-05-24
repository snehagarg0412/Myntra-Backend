const midd=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send("please enter age")
    }
    else if(req.query.age<18)
    {

        resp.send("you are under age")
        }
        else{
            next()
        }
}
module.exports=midd