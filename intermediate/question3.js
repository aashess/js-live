// Given a Map with key-value pairs, reverse the key-value mapping. For example:
// Input: Map { 'a' => 1, 'b' => 2, 'c' => 3 }
// Output: Map { 1 => 'a', 2 => 'b', 3 => 'c' }


function reverseMap() {
    let num = new Map([
        ["india",2],
        ["bangkok", 3]
    ])
    let reverseNum = new Map()
    let temp

    for (let [key,value] of num) {
       

        reverseNum.set(value,key)
        
    }

    for (const [key,value] of reverseNum) {
        console.log(`${key}: ${value}`);
        
    }

}

reverseMap()