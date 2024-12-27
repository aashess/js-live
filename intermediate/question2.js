// Write a program to count the frequency of characters in a string using a Map. For example:
// Input: "javascript"
// Output: A Map with each character as the key and its frequency as the value.



function frequencyCharacterFunction(str){
    let frequencyChar = new Map()

    for(const element of str){
        if (frequencyChar.has(element)) {
            frequencyChar.set(element,frequencyChar.get(element)+1)
        } else {
            frequencyChar.set(element,1)
        }
    }
    for (const [char,count] of frequencyChar) {
        console.log(`${char} : ${count}`);
        
        
    }
}

frequencyCharacterFunction("bangkok")



























// Solution. 

// function frequencyCount(str) {
//     const character = new Map()

//     for (const element of str) {
//         if (character.has(element)) {
//             character.set(element,character.get(element)+1)
//         }
//         else {
//             character.set(element,1)
//         }
//     }
//     for (const [char,count] of character) {
//         console.log(`${char}: ${count}`);
        
//     }

// }

// frequencyCount("omm")





