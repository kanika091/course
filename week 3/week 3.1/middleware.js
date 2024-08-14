const express=require('express');
const app=express();

//middleware is used for authorization and input validation

app.use(express.json());    //used to extract body for post and is also a middleware    ,    also is used everywhere when a request is generated 
function authorize(req,res,next){
    const username=req.body.username;
    const password=req.body.password;
    if(username!="kanika"||password!="pass"){
        res.status(403).json({
            msg:"Wrong username and password"
        })
    }
    else{
        next();
    }
}
function kidney(req,res,next){
    const kid=req.query.kid;
    if(kid!=1&&kid!=2){
        res.status(403).json({
            msg:"Incorrect input"
        })
    }
    else{
        next();
    }
}
app.get('/',authorize,kidney,function(req,res){
    res.json({
        msg:"correct input and you are FINE!!!"
    })
})

app.post('/,authorize',authorize,kidney,function(req,res){
    res.json({
        msg:"Message from post"
    })
})
app.listen(3000);
