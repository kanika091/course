const { json } = require("express");

const user={
    name:"kanika",
    age:20
}
console.log(user["name"]);


//JSON---- json.parse and json.stringify
let user1=`{
    "name":"kanika",
    "age":"20",
    "gender":"female"
}`
const user2=JSON.parse(user1);   //JSON.parse converts object like structured string into object format
console.log(user2["gender"]);

const user3=JSON.stringify(user1);    //JSON.stringify converts string into object
console.log(user3);