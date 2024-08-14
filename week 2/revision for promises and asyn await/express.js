//creating http server
//using express
const express=require('express')
const app=express();

//using query parameter ---- localhost:3000/asd?n=3&a=3
//   /asd is the route and after ? is query parameter


function sum(n){
    return n*n;
}



app.get("/",function(req,res){
    
    const n=req.query.n;
    const ans=sum(n);
    res.send("answer="+ans)
})
app.listen(3000);