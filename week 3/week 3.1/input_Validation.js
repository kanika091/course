const express=require('express');
const app=express();
const zod=require('zod')

const schema=zod.array(zod.number());
app.use(express.json());
app.post('/health-checkup',function(req,res){
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;
    const response=schema.safeParse(kidneys);
    res.json(response);
})

//global catches
app.use(function(err,req,res,next){
    res.json({
        msg:"something wrong with server"
    })
})
app.listen(3001);