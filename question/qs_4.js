// Problem:
// Create a function called isEven that takes a number as input and returns true
// if the number is even and false otherwise.
// Then, rewrite this function using an arrow function.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(function name(params) {
    console.log("Function invoked.");
    
})

()

// rl.question('Please enter a number: ', (input) => {
//   console.log(`You entered: ${input}`);
//   rl.close();
// });

function isEven(input) {
    if (input % 2 == 0) {
        return True
    } else {
        return False
    }
    
}

// isEven(input)
