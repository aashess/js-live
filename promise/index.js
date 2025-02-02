// this is promise Using (resolve, reject)


const promiseOne = new Promise(function(resolve,reject){

    setTimeout(function(){
        // console.log("This promise is intalized.")
        resolve();
    },2000)

})

// promise is intalized with the help of setTimeOut in this function. 

promiseOne.then(function(){
    setTimeout(()=>
    console.log(".")
,3000);
});


new Promise(function(resolve,reject){
    setTimeout(() => {
        // console.log("this is without variable generated.");
        resolve({user:"aashish", "rollNo": "21"});
    },2000)
}).then(function(user){
//   console.log("COMPLETED WITHOUT VARIABLE.");
//   console.log(user.rollNo);    
})


const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false

        if (!error) {
            resolve({userName:"aashesh",password: "1234"})
        } else {
            reject("Something Went Wrong.")
        }
    },4000)
})

const value = PromiseFour.then((user) => {
    console.log("-------------------------------");
    console.log(user.userName);
    console.log(user.password);
    return user.userName
    
})
.catch((userName)=> {
    console.log("Error throughed.");
    console.log(userName);
    
    
})

console.log(value);

// -------------------------------------------------------------------------------


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        const TimeOut = true
        if (!TimeOut) {
            resolve({aashesh: 17,bikash: 21})
        } else {
            reject("Try again, Later.")
        }
    },6000)
})




async function promiseFive_func(){
    try {
        const promiseFive_await = await promiseFive
        console.log(promiseFive_await);
    } catch (reject) {
        console.log(reject);
    }
    
}

promiseFive_func()



