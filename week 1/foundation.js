//var is changeable is globally used in the prgram
var b=1;
b=5;
console.log(b);

//let is changeable but is only available under a block code
let c=1;
c=3;
console.log(c);

//const doesn't change throughout the program and is block oriented
const a=1;
 //a=2;
console.log(a);


// Data types - String , number , boolean
 let firstname="hello";
 let age=20;
 let female=true;


//if condition
if(female){
    console.log(firstname+" is female");
}
else{
    console.log(firstname+" is male" );
}


//for loop
let sum=0;
for(b=1;b<=100;b++){
    sum=sum+b;
}
console.log(sum);


//array.length ---- counts the length of the variable
 b=[1,2,3,4,5]
console.log(b.length);


//Array of objects

let arrays=[{username:"kanika",age:19},    //arrays is an array containing objects  
{username:"priya",age:20},             // username and age is key and are containing values
{username:"jennie",age:18}];         //different objects can have same key name but an object containing different types of keys cannot have same key name
for(let i=0;i<arrays.length;i++){
    if(arrays[i]["age"]<=19){
        console.log(arrays[i]["username"]+" is over 19");
    }
}

// to get any value from array object ----    array[i][object 1][another object in object 1]
array1=[{username:"kanika",age:19,metaData:{num:12334,address:"gurugram"}}]    // array object containing another object
for(let i=0;i<array1.length;i++){
    console.log(array1[i]["metaData"]["address"]);
}



//Functions
function sumof(a,b){
    return a+b;
}
const value=sumof(1,2);
console.log(value);


//Callback functions
function summing(a,b,fun){
    let add=a+b;
    fun(add);
}

function result(data){
    console.log("Answer is "+data);
}

function resultPassive(data2){
    console.log(data+" is answer");
}

//One way to do it
//console.log(result(summing(2,3)));

// Using Callback function
const answer=summing(1,2,result);
console.log(answer);



//****setTimeout functions   ----  waits some time to execute
function greet(){
    console.log("hello there");
}
setTimeout(greet,3*1000);


//setInterval function     ----    calls fnction after an interval again and again
setInterval(greet,1*1000);
