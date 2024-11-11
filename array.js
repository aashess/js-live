//Array Function************************* 

// let name1 = [2,35,3,2,3,4,5]

// name1.push(99)
// console.log(name1);

// name1.pop()
// console.log(name1);

//Shift and Unshift Function************ 

// name1.shift()
// console.log(name1);

// const arr = name1.join()
// console.log(typeof arr);

//Slice and Splice********************
// let arr1 = [2,3,4,6]
// arr_0 = arr1.slice(1,3)
// console.log("A ", arr_0);
// arr_00 = arr1.splice(1,3)
// console.log("B ", arr_00);

//Concat and Spread Function 

// const arr1 = ["aashish","bikash","bibek","om"]
// const arr2 = ["jha","yadav", "mishra", "jha"]
// const arr3 = [2,45,6,7,3]
// console.log("concat: ",arr1.concat(arr2));

// console.log("push: ", arr1.push(arr2));

// arr_0 = [...arr1, ...arr2, ...arr3]
// console.log("Spread: ", arr_0);

// let arr = [2,3,4,5,6]
// let from_array = Array.from(arr)
// console.log(from_array);

// let arrayy = Array.isArray([20,10])
// let arrayy = Array.isArray(["Hellow","ok"])

// console.log(arrayy);

//********************************************
// *******************Question****************

// sumEvenNumbers([1, 2, 3, 4, 5, 6]);  // Output: 12 (because 2 + 4 + 6 = 12)

// function sum_problem() {
//     let num = [2,4,6,8,9]
//     var sum_number=0
//     num.forEach(number => {
//         sum_number += number
//     });
//     return sum_number
    
// }

// let name =sum_problem()
// console.log(name);

//***********************Question 2**********************

// Write a function countWordsWithLetter that takes an array of words and a letter as 
// arguments. Use forEach() to count how many words contain the specified letter (case-insensitive)
//  and return the count.

// Example countWordsWithLetter(["apple", "banana", "grape", "orange"], 'a');  
// Output: 3 (apple, banana, and grape contain 'a')

function countWordsWithLetter(words,charcter) {
    // let words = ["aapplee","baNnana","Cat"]

    let count = 0 
    // const a = "cat"
    // const b = a.includes("x")
    // console.log(b);
    // let split_words = words.split()
    words.forEach(element => {
        let split_element = element.split("")
        // console.log(split_element);
        split_element.forEach(elementt => {
            if (elementt == charcter) {
                count++
            }
        });
        

        // if (split_element.includes("a")) {
        //     count++
        // }
    }
    );
    return count
}
console.log(`Count: `,countWordsWithLetter(["apple","peacock"],"z"));










