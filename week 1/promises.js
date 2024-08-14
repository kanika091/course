const fs=require('fs');
function calling(){
    return new Promise(function(resolve){
        fs.readFile("hell.txt","utf-8",function(err,data){
            
            resolve(data);
        })
    })
}
function onDone(data){
    console.log(data);

}
calling().then(onDone);