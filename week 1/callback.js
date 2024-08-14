function cube(n){
    return n*n*n;
}
function square(n){
    n*n;
}
function calling(a,b,fn){
    val1=fn(a);
    val2=fn(b);
    return val1+val2;
}
console.log(calling(2,3,cube));