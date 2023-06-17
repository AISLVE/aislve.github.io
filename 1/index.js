const outputElement = document.getElementById("count");
const wrapper = document.querySelector('.wrapper');
const wrapper1 = document.getElementById("wrapper")
const enteredElement = document.getElementById("entered")
const leftElement = document.getElementById("left")
let count = 0;
let entered = 0;
let left = 0;
enteredElement.innerHTML = `Entered: ${entered}`
leftElement.innerHTML = `Left: ${left}`

function totalPeopleEntered() {
  entered++;
}

function totalPeopleLeft() {
  left++;
}

function  addCount() {
  totalPeopleEntered()
  count++;
  outputElement.innerHTML = `${count}`;
  wrapper.classList.add("wrapper-green")
  wrapper1.classList.add("wrapper-green")
  if (wrapper.classList[1] === "wrapper") {
    wrapper.classList.remove("wrapper")
    wrapper1.classList.remove("wrapper")
  }
  enteredElement.innerHTML = `Entered: ${entered}`
  console.log(entered)
}
function removeCount() {
  if(count === 0) {
    count = count ;
  } else {
    count--;
    wrapper.classList.add("wrapper")
    wrapper1.classList.add("wrapper")
    if (wrapper.classList[1] === "wrapper-green") {
    wrapper.classList.remove("wrapper-green")
    wrapper1.classList.remove("wrapper-green")
    }
    totalPeopleLeft()
    leftElement.innerHTML = `Left: ${left}`;
  } 
  outputElement.innerHTML = `${count}`;
  console.log(left)
}