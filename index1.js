require("./mongoose")
const imagemodel=require("./nameSchema")
const multer = require("multer")
const express=require("express")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
app.use(express.static("public"))
const storage=multer.diskStorage({
    destination:(req,file,cb)=>
        {
            cb(null,"public/uploads")
        },
        filename:(req,file,cb)=>
            {
                cb(null,file.originalname)
            }
})
const upload=multer({storage:storage}).single("pimage")
app.post("/",(req,resp)=>

{
    upload(req,resp,(err)=>{
        if(err)
            {
                resp.send(err)
            }
            else{
                const newdata=new imagemodel({
                    image:"http://localhost:7000/uploads/"+req.file.filename,
                    name:req.body.name
                })
                const data=newdata.save()
                resp.send("save data successfully")
            }
    })
})
app.get("/",async(req,resp)=>

    {

          const data= await imagemodel.find()
          resp.send(data)
        
    })
app.listen(7000)

