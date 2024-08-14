function calling(){
    let p=new Promise(function(resolve){
        setTimeout(resolve,2000)
        
    });
    return p;
}
function onDone(){
    console.log("hello there 1");
}
calling().then(onDone);
console.log("outside");

function kalling(){
    let p=new Promise(function(resolve){
        setTimeout(resolve,2000)
        
    });
    return p;
}
function oDone(){
    console.log("hello there");
}
kalling().then(oDone);
console.log("ousride 2");