class animal{
    constructor(name,legCount,speaks){   //constructor
        this.name=name;
        this.legCount=legCount;
        this.speaks=speaks;
    }
    static hello(){       //static functions are directly associated with class and can be called without an object
        console.log("hello there");
    }
    speak(){         //function inside class that can be called 
        console.log(this.name+" says "+this.speaks);
    }
}
console.log(animal.hello());  


let dog=new animal("dog",4,"bark");   //created object which passes parameters to class
dog.speak();        //object dog called function speak which is inside class animal


// class{
//     constructor(){

//     }
//     function(){

//     }
// }
// create Object
// call the function with object