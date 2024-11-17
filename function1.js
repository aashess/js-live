
function animal(name) {
    
    if (!name) {
        console.log("Please write your name.");
        return
    }
    
    return `${name} just logged in.`
}

funct_1 = animal()
console.log(funct_1);
