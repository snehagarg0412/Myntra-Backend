const http=require("http")
var data=[{rollno:101,name:"sneha",marks:45},
{rollno:102,name:"mahima",marks:56}]
http.createServer((req,resp)=>{
    resp.write(JSON.stringify(data))
    resp.end()

}).listen(8000)