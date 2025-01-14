const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const reset = document.querySelector("#reset");
const output = document.querySelector("#results");
const button = document.querySelector("button");
// console.log(output);




button.addEventListener("click", calculation);

function calculation(e) {
  e.preventDefault();
// console.log(e);

  const intHight = parseInt(height.value);
  const intWeight = parseInt(weight.value);
  // console.log(intHight);

  if (intHight === 0 || isNaN(intHight)) {
    alert("Please enter valid height.");
  } else if (intWeight === 0 || isNaN(intWeight)) {
    alert("Please enter valid height.");
  } else {
    const result = intWeight / (intHight * intHight);
    output.innerHTML = `Your BMI is: ${result}`;
  }
}
reset.addEventListener("click",resetPage)


function resetPage(e) {
    e.preventDefault()
    height.value = ""
    weight.value = ""

}


