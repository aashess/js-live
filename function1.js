
// function animal(name) {
    
//     if (!name) {
//         console.log("Please write your name.");
//         return
//     }
    
//     return `${name} just logged in.`
// }

// funct_1 = animal()
// console.log(funct_1);


//function with object
//function with array 
//spread operator

function arr(...parameter) {   //spread operator. 
    return parameter
}

console.log(arr(200,300,400));

//function with object 

const obj = {
    name: "aashish",
    age: 21
}

function details(obj_param) {
    console.log(obj_param.name, `is somehow intelligent.`);
    console.log(obj_param.age);
    
}

details(obj)

//function with array

function arr(param) {
    return param[0]
}


