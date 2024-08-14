
const zod=require('zod');
function check(arr){
    const schema=zod.array(zod.number());
    const response=schema.safeParse(arr);
    console.log(response);
}
check([1,2,3]);