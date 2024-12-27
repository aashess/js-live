const language = [ "cpp","python","java", "javascript"]

language.forEach(function (item) {
    // console.log(item);
    
})
language.forEach((item,arr,array) => {
    // console.log(array);
})

// object inside array.

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
    console.log(item.programmingName);
    console.log(item.programmingShortForm);
    
} )


// function printMe (){
//     console.log("Hellow World");
    
// }

// language.forEach(printMe)

// arrow function. 

// const name = x => x * 2;

// console.log(name(2));
