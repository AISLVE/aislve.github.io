const outputElement = document.getElementById("count");
let count = 0;

function  addCount() {
  count++;
  outputElement.classList.remove("red-color")
  outputElement.classList.add("green-color")
  outputElement.innerHTML = count;
}
function removeCount() {
  if(count === 0) {
    count = count ;
  } else {
    count--;
    outputElement.classList.remove("green-color")
    outputElement.classList.add("red-color")
  }
  outputElement.innerHTML = count;
}