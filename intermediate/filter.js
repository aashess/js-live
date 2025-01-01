const arr = [20,21,35,87]

let filterNum = arr.filter((item) => {
    return item > 30
})

// console.log(`filterNum: ${filterNum}`);
let num = []

let forEachNum = arr.forEach((item) => {
    if (item > 30) {
        num.push[item]
    }
})

// console.log(`num: ${num}`);

// ------------------------------------------

const books = [
    {
    bookName:"book1", genre: "history", year: 2000
},
{
    bookName: "book2", genre: "math", year: 1997

},
{
    bookName: "book3", genre: "philosopy", year: 1975

}]

let BooksFilter = books.filter( (bk) => bk.year > 1976)
BooksFilter = books.filter( (bk) => {return bk.genre === 'history'})

console.log(BooksFilter);


