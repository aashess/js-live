let img1 = document.getElementById("img1");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let theme = document.querySelector(".top-right-button");
let body = document.querySelector("body");
let image_class = document.querySelector(".image")

let previousImg = img1.src;

button1.addEventListener("click", function (e) {
  img1.src = "https://images.pexels.com/photos/19807714/pexels-photo-19807714/free-photo-of-house-in-forest-in-evening.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
});
button2.addEventListener("click", function (e) {
  img1.src = previousImg;
});

theme.addEventListener("click", function (e) {
  if (body.style.backgroundColor  == "white") {
    body.style.backgroundColor = "black";
    image_class.style.border = "2px solid white"

  } else {
    body.style.backgroundColor = "white";

  }
});

// function call(e){
// }
// console.log(img1);
