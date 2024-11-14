// count number of Vowels. 

const str = "Hey JS! You R AMAZING";

const vowels = [ 'a','e','i', 'o', 'u']

function countVowels(data) {
    const lower_letter = data.toLowerCase()
    
    const arr_word = lower_letter.split("")

    console.log(arr_word);
    new_array_index = 0
    count = 0 
    const index2 = 0


    for (let index = 0; index <= arr_word.length; index++) {
        if (arr_word[index2] === vowels[index]) {
            count++ 
            index2++
        }
            
        
    }

    

const numofVowels = countVowels(str);