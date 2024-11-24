var a = 20

let b = 21

if (true) {
    console.log("inner function: ", a);
    console.log("inner function: ", a);

    a = 30
    b = 31
    
    console.log(a);
    console.log(b);
    
}

console.log(a);
console.log(b);