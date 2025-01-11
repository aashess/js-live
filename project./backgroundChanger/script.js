const body = document.querySelector('body')
const button = document.querySelectorAll('.button')
const reset = document.getElementById(".reset")
console.log(button);

button.forEach(function (button) {
    button.addEventListener('click',function(e) {
        
        if (e.target.id === 'grey' ) {
            body.style.backgroundColor="grey"
        }
        else if (e.target.id === 'red'){
            body.style.backgroundColor="red"
            
        }
        else if (e.target.id === 'blue'){
            body.style.backgroundColor="blue"
            
        }
        else if (e.target.id === 'yellow'){
            body.style.backgroundColor="yellow"
            
        }
        else if (e.target.id === 'purple'){
            body.style.backgroundColor="purple"
            
        }
    })
})

reset.addEventListener("click",function(li){
    body.style.backgroundColor="white"
})
