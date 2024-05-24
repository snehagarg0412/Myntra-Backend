const connectdb=require("./mongodb")
async function update()
{
     const conn=await connectdb()
    //  const data=await conn.updateOne({rollno:101},{$set:{name:"kashish",marks:99}})
    const data=await conn.updateMany({name:"annu"},{$set:{name:"manoj"}})
     
     console.log(data)
     
}
update()