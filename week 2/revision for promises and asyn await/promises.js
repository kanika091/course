function mySetTimeOut(callback,duration){
    setTimeout(callback,duration);
}
mySetTimeOut(function(){
    console.log("after 2 seconds")
},2000);


//using promise 
function newSetTimeOut(duration){
    const p=new Promise(function(resolve){   //resolve is the .then function that would be called after asyn function is done
        setTimeout(function(){
            resolve()
        },duration);

    })
    return p;
}
const ans=newSetTimeOut(4000);
console.log(ans); //shows pending because of it's synchornous 
ans.then(function(){
    console.log("done after promise 2 seconds")   //function that would be called after asyn function is done
});

function promised(duration){
    const p=new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration)
    })
    return p;
}
function called(){
    console.log("after 2 seconds in using promise")
}
const result=promised(6000);
result.then(called());




function answer(){
    const pr=new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        },20000);
    })
    return pr;
}
function square(n){
    console.log(n*n);
}
function cube(n){
    console.log(n*n*n);
}

const res=answer();
res.then(square(2));
