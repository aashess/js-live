const language = [ "cpp","python","java", "javascript"]
let average = 0 

const marks = [20,23,27,30,40,88].forEach(item => item * 2);

console.log(marks);



language.forEach(function (item) {
    // console.log(item);
    
})
// marks.forEach((item => average+=item));
// console.log(average);


language.forEach((item,arr,array) => {
    // console.log(array);
})

// object inside array.

console.log(marks);
console.log(language);


const myCoding = [
    {
    
        "programmingName" : "c programming",
        "programmingShortForm": "cpp"

    },
    
    {
        "programmingName" : "java",
        "programmingShortForm": "java"
    },
    
    {
        "programmingName" : "python",
        "programmingShortForm": "py"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.programmingName);
    // console.log(item.programmingShortForm);
    
} )


// function printMe (){
//     console.log("Hellow World");
    
// }

// language.forEach(printMe)

// arrow function. 

// const name = x => x * 2;

// console.log(name(2));
