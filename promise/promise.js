// Write a function fetchUserData(userId) that returns a Promise.

// If the userId is 1, resolve with { id: 1, name: "Alice" } after 2 seconds.
// If the userId is not 1, reject with an error "User not found" after 2 seconds.
// Use .then() and .catch() to handle the Promise and log the result.


function fetchUserData(userId) {
    return new Promise((resolve,reject) => {
        // userId = 1
        let resolveMESSAGE = {
            id: 1,
            name: "Alice"
        }
         
        let errorMESSAGE = ("User not found")
        setTimeout(() => {
                if (userId == 1) {
                    resolve(resolveMESSAGE)
                } else {
                    reject(errorMESSAGE)
                }
        }, 2000)
    })
}

fetchUserData(0)
.then((result) => {
    console.log(result);
    
})
.catch((error) => {
    console.log(error);
})