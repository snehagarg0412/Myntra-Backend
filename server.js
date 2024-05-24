const http=require("http")
http.createServer((req,resp)=>{

resp.write("sneha gupta")
resp.end()

}).listen(4000)
