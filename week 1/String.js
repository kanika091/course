//Length of string

function lengthOf(name){
    console.log("length = "+name.length);
}
lengthOf("kanika");


//indexOf

function IndexOf(name,word){
    console.log("Index of "+word+" "+name.indexOf(word));
    console.log("Last index of "+word+" "+name.lastIndexOf(word))

}
IndexOf("kanika Sharma Sharma hello Sharma","Sharma");



//slice
function slicing(name,num){
    console.log("sliced string "+name.slice(3,num));
}
slicing("kanika sharma",6);      //3 to 5 



//replace
function replacing(name,word){
    console.log("original name = "+name);
    console.log(name.replace("kanika",word));
}
replacing("kanika sharma","kiran");



//split    ---   splits string into array
function spliting(name){
    console.log(name.split(' '));
}
spliting("hello there how are you");



//trim
function triming(name){
    console.log("without trimming"+name);
    console.log(name.trim());
}
triming("        kanika        ");



//upper lower case
function Case(name){
    console.log(name.toUpperCase());
    console.log(name.toLowerCase());
}
Case("kAnIka");