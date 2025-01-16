// set Time out 

function greeting(index) {
    console.log(`aashish ${index} `);
    
}

const count = 5


const loop = function(){
    for(let index=0 ;index < count; index++){
    
    setTimeout(() => greeting(index),index * 2000);
}
}
//  clear time out
loop()
greeting(2)
// clearTimeout(loop,"loop cancelied")

