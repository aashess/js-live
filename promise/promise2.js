// Write a function checkStock(item) that returns a Promise.

// If the item is "laptop", resolve with the message "Laptop is in stock ✅" after 1.5 seconds.
// If the item is "phone", resolve with the message "Phone is in stock ✅" after 1.5 seconds.
// For any other item, reject with the message "Item not available ❌" after 1.5 seconds.
// Use .then() and .catch() to handle the promise and log the result.


function checkStock(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (item == "Laptop" || item == "Phone") {
                resolve("item is in stock")
            } else {
                reject("item not available")
            }
        })
    })
}

checkStock("Phone")
.then((result) => {
        console.log(result);
})

.catch((error) => {
    console.log(error);  
})