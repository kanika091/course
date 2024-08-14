function Objects(obj){

    keys=Object.keys(obj);
    console.log(keys);

    values=Object.values(obj);
    console.log(values);

    entries=Object.entries(obj);   //every object key value pairs is a array element
    console.log(entries);
    pro=obj.hasOwnProperty("age");   //tells us if that key is present in the object or not
    console.log(pro);
}
const user={
    name:"kanika",
    age:20,
    gender:"female"
}
Objects(user);