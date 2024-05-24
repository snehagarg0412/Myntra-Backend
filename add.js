// var a=10;
// var b=0;
// setTimeout(()=>
// {
//     b=20;
//     console.log(a+b)
// },5000);
// console.log(a+b) 




var a=10;
var b=0;
const Promisedata=new Promise((resolve,reject)=>
    {
        setTimeout(()=>
    {
        resolve(20)
    },5000);
})
Promisedata.then((data)=>
{
      b=data;
      console.log(a+b)
})