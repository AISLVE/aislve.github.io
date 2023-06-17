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
  enteredElement.innerHTML = `Entered: ${entered}`
  console.log(entered)
}
function removeCount() {
  if(count === 0) {
    count = count ;
  } else {
    count--;
    totalPeopleLeft()
    leftElement.innerHTML = `Left: ${left}`;
  } 
  outputElement.innerHTML = `${count}`;
  console.log(left)
}