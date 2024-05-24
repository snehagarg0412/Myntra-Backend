const {MongoClient}=require("mongodb")
const url="mongodb://localhost:27017";
const database="college";
const client=new MongoClient(url)

 async function connectdb()
 
{
    var conn=await client.connect()
    var db=conn.db(database)
    var collection=db.collection("student")
    var data=await collection.find().toArray()
    console.log(data)

}
connectdb()




























