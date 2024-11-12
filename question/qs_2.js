// ***********Question 2************

// Write a function averageOfSquares that takes an array of numbers as input. The function should:

// Square each number in the array.
// Calculate and return the average of these squared numbers.

// averageOfSquares([2, 3, 4]);  
// Expected Output: 9  (since (4 + 9 + 16) / 3 = 9)

// *************Answer**************

function averageOfSquares(number) {
    let sum_number=0
    let count = 1
    number.forEach(element => {
        sum_number = (element * element) + sum_number
        count++
        // console.log(sum_number);
        
    });

    let average = sum_number / number.length 
    return average
}

console.log("Average: ",averageOfSquares([2,2]))