const express=require('express');
const app=express();

const user=[{name:'kanika',
            Kidney:
            [{healthy:false}]
        }]
app.get('/',function(req,res){                           //when using get we have everything nothing is needed from user
    const userkidney=user[0].Kidney;
   const numberOfkidney=userkidney.length;
   const numberOfHealthyKidney=0;
   for(let i=0;i<userkidney;i++){
    if(userkidney[i].healthy){
        numberOfHealthyKidney=numberOfHealthyKidney+1;
    }
   }
   const unhealthyKidney=numberOfkidney-numberOfHealthyKidney;
   res.json({
    userkidney,
    numberOfHealthyKidney,
    unhealthyKidney
   })

})
app.use(express.json());
app.post('/',function(req,res){        //using post user sends data through query or body so it needs to be imported from there
    const ishealthy=req.body.ishealthy;
    user[0].Kidney.push({ 
        healthy:ishealthy
    })
    res.json({
        msg:"done"
    })
})
app.put('/',function(req,res){
    for(let i=0;i<user[0].Kidney.length;i++){
        user[0].Kidney.healthy=true;
    }
    res.json({});
}) 
app.delete('/',function(req,res){
    const newkidney=[];
    for(let i=0;i<user[0].Kidney.length;i++){
        newkidney.push({
            healthy:true
        })
        user[0].Kidney=newkidney;
    }
    res.json({msg:"done"})
})
app.listen(3001);