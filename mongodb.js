const {MongoClient}=require("mongodb")
const url="mongodb://localhost:27017";
const database="college";
const client=new MongoClient(url)
async function connection()
{
    var conn=await client.connect()
    var db=conn.db(database)
    return db.collection("student")
}
module.exports=connection