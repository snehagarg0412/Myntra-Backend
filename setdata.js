const connectdb=require("./mongodb")
 async function getdata()
{
     const conn=await connectdb()
    //  const data= await conn.insertOne({rollno:109,name:"avani",marks:90})
     const data= await conn.insertMany([{rollno:107,name:"arvi",marks:80},{rollno:111,name:"komal",marks:88}])

     console.log(data)
}
getdata()