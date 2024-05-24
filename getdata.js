
const connectdb=require("./mongodb")
 async function getdata()
{
     const conn=await connectdb()
     const data= await conn.find().toArray()
     console.log(data)
}
getdata()