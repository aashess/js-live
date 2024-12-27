// Iterate and Filter Keys and Values
// Create a Map to store the names of students as keys and their scores as values. Write a program to:
// Use a for...of loop to print only the names of students who scored above 75.
// Use a for...in loop (on an object) to achieve the same.

const filter = new Map([
    ["aashish", "90"],
    ["bikash" , "80"],
    ["ritik",  "5"],
    ["shubham", "80"]
])



// filter.set('om',20)

// console.log(filter);

// console.log(filter.values("80"));
// console.log(filter.get("80"));

//-----------for..of is used in map----------


for (const [key,values] of filter) {
    
    if (values > 75) {
        // console.log(key);
        
    }
}

const obj = Object.fromEntries(filter);

// console.log(obj["ritik"]);

const varr = new Map([

])


for (const key in obj) {
    
    if (obj[key] > 75) {
        // console.log(`${key}: ${obj[key]}`);
        console.log(key);
        
    
    }
    
}
