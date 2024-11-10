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

const arr1 = ["aashish","bikash","bibek","om"]
const arr2 = ["jha","yadav", "mishra", "jha"]
const arr3 = [2,45,6,7,3]
// console.log("concat: ",arr1.concat(arr2));

// console.log("push: ", arr1.push(arr2));

arr_0 = [...arr1, ...arr2, ...arr3]
console.log("Spread: ", arr_0);



