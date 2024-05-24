const express=require("express")
const app=express()
require("./mongoose")
const studentSchema=require("./studentSchema")
app.use(express.json())
// const cors=require("cors")
// app.use(cors())
// frontend s phr mongo m aega data


app.post("/",async(req,resp)=>{

const data=await new studentSchema(req.body)
const entry=await data.save()


resp.send(entry)

})
app.listen(7000)

// postamn se mongo m data aya 
