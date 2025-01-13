let h1 = document.querySelector("h1") 
const button1 = document.querySelector("button")
const button2 = document.querySelector("#reset")


let original = h1.innerText

// console.log(original)

button1.addEventListener("click",function(){
    h1.innerHTML = "Shubham yadav"

})
button2.addEventListener("click",function(){
    h1.innerHTML = original
    // console.log(original);

})