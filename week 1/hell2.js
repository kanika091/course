const fs=require("fs");
// const { resolve } = require("path");
// // fs.readFile("hell.txt","utf-8",function(err,data){    //file name that utf than the function which prints the data of the file 
// //     console.log(data);      //fsreadFile is also asyn function
// // })
// // console.log("what's up");



function file(){
    return new Promise(function(resolve){
        fs.readFile("hell.txt","utf-8",function(err,data){
            resolve(data);
        });
    })
}
function onDone(data){
    console.log(data);
}
file().then(onDone);