const express=require('express');
const app=express();
const port=3000;
const bodyParser=require("body-parser");

//middleware
app.use(bodyParser.json());
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send("hello there")
})
app.listen(port,()=>{

    console.log(`listening on port ${port}`)

})