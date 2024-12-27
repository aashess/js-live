//map 

let number = [2,4,5,6,7,6]
let mapNum = number.map(myfunction)

function myfunction(num) {
    return num * 2
}

// console.log(mapNum);
//__________________________________________
//itterate over object. 

const obj = { name: "aashish",roll_No: 21}

for (const key in obj) {
    // console.log(`${key}: ${obj[key]}`);
}

// for (let index = 0; index < obj; index++) {
//     const element = array[index];
    
// }

//itterate over object using for...in loop 

const Object_check ={
    "id" : 20,
    "name" : "aashish",
    "address" : "Nepal",
    "country" : "asia"
}

for (const key in Object_check) {
    // console.log(`${key}:  ${Object_check[key]}`);
    
}

//itterate over array using for...in loop 

let subject = ["cpp","java","database","operating system"]

for (const key in subject) {
    // console.log(subject[key]);
    
}
// console.log("-----------------");

for (const key of subject) {
    // console.log(key);
}

const map = new Map()
map.set('all',"all the best")
map.set('ok',"done")
map.set('well',"fine")

for (const key in map) {
    console.log(key);
    
    
}
