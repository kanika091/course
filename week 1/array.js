
//adds new element in end of the array
let arr=[1,2,3];
arr.push(3);
arr.push(4);
console.log("array after pushing 3 and 4 = "+arr);


//pop deletes the last element from the array
arr.pop();
console.log("array after deleting array from end = "+arr);


//**deleting element from **front of array
arr.shift();
console.log("array after deleting array from end = "+arr);


//**adding element in **front of the array
arr.unshift(4);
console.log("array after adding element in front of array = "+arr);



//merging 2 arrays using concat
let arr1=[1,2,3];
let arr2=[4,5,6];
console.log("first array = "+arr1);
console.log("second array = "+arr2);
console.log("Merging 1st and 2nd array = "+arr1.concat(arr2));


//foreach    --- it calls the function for each element and does the function process
function printing(name){
    console.log(name);
}
let arr3=["kanika","sharma"];
arr3.forEach(printing);




