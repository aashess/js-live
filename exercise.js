// Write a function isPalindrome(str) that takes a string and returns true. 
// if it's a palindrome (reads the same forwards and backwards) and false otherwise.

function palindrome(str) {
    let number = str.split("").reverse().join("")

    // console.log(number);
    
    if (number === str) {
        return true
        
    } else {
        return false
        
    }
    
}

console.log(palindrome("level"));

