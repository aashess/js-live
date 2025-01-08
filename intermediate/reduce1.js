// shopping cart. 

const cart = [
    {
        item : "jacket",
        price : 2999, 
        size : "XL"

    },
    {
        item : "Gloves",
        price : 999,
        size : "M"
    },
    {
        item : "Inner",
        price : 1599,
        size : "M"
    }
]

let sum = cart.reduce(function (acc,amount) {
        return amount.price + acc
}, 0 )

console.log(sum);
