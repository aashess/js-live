

const school = {
    student: {
        classs_1 : {
            id_1 : {
                name: "aashish jha",
                class: 1,
                roll_no: 24,
                fees: "20k",
                gender: "male"
                
            },
            
            id_2 : {
                name: "sumit sahu",
                class: 1,
                roll_no: 20,
                fees: "20k",
                gender: "male"
            },
            
            id_3 : {
                name: "amit sah",
                class: 1,
                roll_no: 22,
                fees: "20k",
                gender: "male"
            }
        },

        class_2 : {
            id_1 : {
                name: "anushika sahh",
                class: 2,
                roll_no: 22,
                fees: "23k",
                gender: "female"
            }
        },
        class_3 : {
            id_1: {
                name: "om sah",
                class: 3,
                roll_no: 20,
                fees: "30k",
                gender: "male"
            }
        }
    },
    teacher: {
        id_1:{
            name: "bharat sah",
            sallary: "20k",
            gender: "male"
        }
    }
}

const id = school.student.classs_1.id_1.fees

let name = school.student.classs_1.id_1.name

//console.log(`${name} pays almost ${id} to the school.`);

const strr = "oh boy how are you."
const surname = "jha"
console.log(strr.length);           //check the length of the string. 
console.log(strr.charAt(2));        //check char present at this index. 

console.log(surname.concat("tu"));

console.log(strr.concat(" haha ", surname));  // add two things.
console.log("******************")

console.log(strr.includes("boy")); // check is that word exist or not. 


console.log(strr.lastIndexOf("you", 15)); //gives last string indexes

console.log(strr.indexOf("you"));   // gives first string indexes. 

console.log("******************")

let name1 = "Hellow world ok to new generation of the world."
console.log(name1.slice(0,4));    // Extracts a part of a string and returns it as a new string

console.log(name1.substr(2,8));  //Extracts a substring based on the starting index and length.

console.log(name1.toUpperCase());  //converts to upper case. 
console.log(name1.toLowerCase());   //converts to lower case. 

console.log("******************")

console.log(name1.trim());  //removes whitespace from both ends of the string. 

console.log(name1.split("ok"));  //converts string into array based on some specific seperator. 

console.log(name1.replaceAll("world","country"));   //Replaces a specified value with another string.
console.log(name1.replace("generation", "surrounding"));


console.log("******************")

let new_name = "Well this is new function cool and wool" //Searches a string for a match against a regular expression and returns an array of matches
let result = new_name.match(/ool/g)
console.log(`This is ${result} speaking.`);
console.log("******************")


const text = "Hello World";  //Checks if a string starts or ends with a specified string.
console.log(text.startsWith("Hello")); // Output: true

console.log(text.endsWith("world"));

console.log("******************")

const val = "3"      //Pads the string with another string until it reaches a specified length.
console.log(val.padStart(4,"2"))
console.log(val.padEnd(5,"4"));
















