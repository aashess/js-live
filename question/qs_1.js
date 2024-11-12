// ************Questin 1*************

// Write a function filterAndCapitalize that takes an array of strings and a character as
//  inputs. The function should:

// Filter out the strings that start with the specified character (case-insensitive).
// Convert the remaining strings to uppercase.
// Return the modified array.

// filterAndCapitalize(["apple", "banana", "cherry", "avocado"], 'a');  
// Expected Output: ["BANANA", "CHERRY"]

//**************Answer****************

function filterAndCapitalize(words,charc_ter) {
    let new_array = []
    for (let index = 0; index < words.length; index++) {
      const element = words[index];
      if (element.startsWith(charc_ter)) {
        new_array.push(element.toUpperCase())
      }
      
   
    }
        return new_array
}

let func_call =filterAndCapitalize(["apple","bannana","grapes","avaarcdo"],"a")
console.log(func_call);

