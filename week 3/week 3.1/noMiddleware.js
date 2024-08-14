const express=require('express')
const app=express();
app.get('/health-checkup',function(req,res){
    const user=req.header.user;
    const pass=req.header.pass;
    const kid=req.query.kid;
    if(user!="kanika"||pass!="123")
        {
            res.status(403).json({
                msg:"Wrong username and password"
            })
            return
        }
            if((kid!=1 || kid!=2)){
            res.status(411).json({
                msg:"Wrong input"
            })
            return
        }
        res.json({
            msg:"Your kidneys are fine!!"
        })
})
app.listen(3000);