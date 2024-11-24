function student(id = 21) {
    if (!id) {
        console.log("Please enter the id: ");
        return id
        
    }
    return `${id} just logged in`
}

console.log(student(31))

console.log("*******************");

function spread(num1,num2, ...num3) {
    console.log(num3);
    
}

result =spread(20,30,40,32,34)

console.log(result);

console.log("*******************");

//id, name, gender

function func_1(anyObject) {
    console.log(`Id is ${anyObject.id} of ${anyObject.name} and he is ${anyObject.gender}`);
        
}

func_1(
    {
        id: 20,
        name: "rohit",
        gender: "male"
    }
)
console.log("*******************");



