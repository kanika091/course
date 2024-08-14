const fs=require('fs');

fs.readFile('call.txt','utf-8',function(err,data){
    console.log(data);
})
console.log("done");     //fs goes to bring file and logs it after the thread is free and so other line of code works further