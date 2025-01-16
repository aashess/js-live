const start = document.querySelector("#Start")
const stop = document.querySelector("#Stop")
let bodies = document.querySelector("body")

function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}
// console.log(getRandomHexColor());

let setIntervalId

start.addEventListener("click",function(e){
    // for(let index = 0; index < 100; index++){
    // const bgColor = bodies.style.backgroundColor = getRandomHexColor()
    // setIntervalId = null
    clearInterval(setIntervalId)
    setIntervalId = setInterval(()=> bodies.style.backgroundColor = getRandomHexColor()
    ,1000)

    // }
})

stop.addEventListener("click",function(e){
    clearInterval(setIntervalId)
})


