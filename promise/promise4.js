
// function delay(ms) {
//     // return new Promise(resolve => setTimeout(
//     //     console.log("inside function.")
//     //     ,ms)
//     // )

// }


// async function main() {
//     console.log("main function");
//     delay(2000)
//     console.log("After 2 second.");
    
    
// }

// main()

function checkParameter(params) {
    const promiseCreation = new Promise((resolve,reject) => {
        const count = 0 
        if (count) {
            setTimeout(() => {
                 console.log("This is generated after 2 seconds.");
                
            }, 3000)
        }
        });
        
}

checkParameter()