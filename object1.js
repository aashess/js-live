const obj1 = {
    name : "aashish jha",
    id : 26345,
    gender : "male",
    color: "Dark",

}

// console.log(obj1["gender"]);
// console.log(obj1.name);
// console.log(obj1.gender);

// console.log(obj1["name"]);


obj1.greeting = function() {
    welcome_greet : "Welcome to AirBnb in Noida."
}

// console.log(obj1.greeting());

// console.log(obj1.name);
// console.log("******************");
// console.log(obj1);

'use strict';

const object_1 = {
    id : 3404,
    full_name : {
        first_name : "aashish",
        last_name : " jha"
    },
    address : "Kanpur, Uttarpardesh"
}

console.log(object_1.full_name.last_name," is first person to come here.");

object_1.full_name.last_name="bro"
console.log(object_1.full_name.last_name," is first person to come here.");
Object.freeze(object_1)
object_1.full_name.last_name="rittikk"
console.log(object_1.full_name.last_name," is first person to come here.");

