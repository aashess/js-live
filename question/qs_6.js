// simple arrow function practice 

// Write an arrow function that takes one number and returns its square.
// square(4); // Output: 16

// const square = x => x * x 

// console.log(square(4));

// question 3 

// Write an arrow function that returns a string "Hello, World!".
// greet(); // Output: "Hello, World!"

// const greet = () => "Hello, World"

// console.log(greet());

// question 4 

// Write an arrow function that calculates the area of a rectangle.
//  It should have default values of length = 5 and width = 4
//  if no arguments are passed.

// Example:
// area(); // Output: 20
// area(10, 2); // Output: 20

// const area = () => 5 * 4

// console.log(area());

// const area1 = (len = 5, wid = 4) => len * wid


// console.log(area1(4 , 2));
// console.log(area1(2));
// console.log(area1);

// We have an array with numbers
const numbers = [2, 4, 6, 8, 32, 100]
// Create function to filter any array
const functionToFilterNumbers = function(number){
 return number > 5;
}
// Filter the 'numbers' array
const filtered = numbers.filter(functionToFilterNumbers)
//Display filtered array
console.log(filtered)







