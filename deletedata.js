const connectdb=require("./mongodb")
async function deletedata()
{
     const conn=await connectdb()
    //  const data=await conn.deleteOne({rollno:101})
    const data=await conn.deleteMany({rollno:103})
    // name marks bhi delete krskte h
     
     console.log(data)
     
}
deletedata()