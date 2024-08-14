//map
let arr=[1,2,3,4,5]
function ans(i){
    return i*2;
}
const result=arr.map(ans);
console.log(result);

//filter
function logic(i){
    if(i%2==0){
        return true;
    }
    else{
        return false;
    }
}
const myAnswer=arr.filter(logic);
console.log(myAnswer);