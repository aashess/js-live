const arr = [ 2,3,45,6,7,3]

let sum = arr.reduce(function (acc, item) {
    // console.log(`acc: ${acc} and item: ${item}`);
        
    return acc + item
}, 0)
// console.log(sum);

// product of a number.. 
let totalNumber = [2,4,6,8,10]  //output 3840

let ans = totalNumber.reduce(function (acc,item) {
    return acc * item
}, 1)
// console.log(ans);

// solve nested array into a single array. 

let nestedArray = [[2,4],[6,8],[10,12]]

// let finalArr = []

let mainArr = nestedArray.reduce(function (arr,item){
    return arr.concat(item)
},[])

// console.log(mainArr);

// function funcConc(num) {
//     let num1 = num.forEach(element => {
//         return num1.concat(element)

//     //    let toBePushedItem = num1.concat(element)
//     //    num1.push(toBePushedItem)

       
//     });
//     console.log(num1);
    
// }
nestedArray = [[2,4],[6,8],[10,12]]

function funcConc(num) {
    let outerVar = []
    let mainPro = nestedArray.map((item) =>{
        // outerVar.push(item)
        return item.map((item1) => {
            return item1
            // outerVar.push(item1)
            // return item1

        })
        // console.log(item);
    //   console.log(mainPro);
        
    })
console.log(mainPro);

        
    
    
}



funcConc(nestedArray)




