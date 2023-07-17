const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");
const milliSecondsElement = document.getElementById("milli-seconds");
const hoursElement = document.getElementById("hours");
const resumeButton = document.getElementById("resume");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const colon1 = document.getElementById("colon1");
const colon2 = document.getElementById("colon2");
const timeElement = document.getElementById("stopwatch");
const lapsElement = document.getElementById("lapsContainer")

resumeButton.addEventListener('click', start);
pauseButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
timeElement.addEventListener('click', addLap)

pauseButton.style.display = 'none';
resetButton.style.display = 'none';

let intervalID;
let isPlaying;
let blink;
let wasReset = false;
let isRounded = true;
let ms = sec = min = hours = 0; 
let laps = [];
let htmlCode = '';

document.addEventListener('keydown', (event) => {
  if(event.key === ' ') {
    if(isPlaying === true) {
      stop();
    } else {
      start();
    }
  }
  if(event.key === 'r' || event.key === 'Backspace') {
    reset();
  }
  if(event.key === 'l') {
    addLap();
  }
})


function start() {
  if(isPlaying === true) {
    // Didn't call the stop function as i want to do it with a seperate function and button
  } else {
    intervalID = setInterval(() => {
      ms++;
      if(ms === 100) {
        ms = 0;
        sec++;
      } 
      if(sec === 60) {
        sec = 0;
        min++;
      }
      if(min === 60) {
        min = 0;
        hours++;
        
      }
      updateTime();
    }, 10);
  }
  isRounded = true;
  wasReset = false;
  isPlaying = true;
  blink = true;
  changeButton();
  blinking('noBlink');
}

function stop() {
  wasReset = false;
  isRounded = false;
  isPlaying = false;
  blink = false;
  clearInterval(intervalID);
  changeButton();
  blinking('blink');
}

function updateTime() {
  if(hours === 0) {
    hoursElement.innerHTML = ``;
  }
   else {
    hoursElement.innerHTML = `${hours}`;
    colon1.innerHTML = `:`
  }

  if(min === 0 && hours === 0) {
    minutesElement.innerHTML = ``;
  } else if(hours >= 1) {
      if(min < 10) {
        minutesElement.innerHTML = `0${min}`;
        colon2.innerHTML = `:`
      }  else {
        minutesElement.innerHTML = `${min}`;
        colon2.innerHTML = `:`
      }
  }
  else {
    minutesElement.innerHTML = `${min}`;
    colon2.innerHTML = `:`
  }

  if(sec === 0 || sec < 10) {
    secondsElement.innerHTML = `0${sec}`;
  } else {
    secondsElement.innerHTML = `${sec}`;
  }

  if(ms < 10) {
    milliSecondsElement.innerHTML = `0${ms}`;    
  } else {
    milliSecondsElement.innerHTML = `${ms}`;
  }
  changeButton();
}

function reset() {
  clearInterval(intervalID)
  min = ms = sec = hours = 0;
  isRounded = false;
  wasReset = true;
  isPlaying = false;
  blink = true;
  colon1.innerHTML = ``;
  colon2.innerHTML = ``;
  lapsElement.innerHTML = `<h1>No Laps.</h1>`;
  blinking('noBlink')
  updateTime();
  changeButton();
}

function changeButton() {
  if(isRounded === true ) {
    resumeButton.style.display = 'none';
    pauseButton.style.display = 'grid';
    pauseButton.style.animation = 'button 0.25s ease'
    resetButton.style.display  = 'grid';
    resetButton.style.opacity = '1'
  } else {
    resumeButton.style.display = 'grid';
    resumeButton.style.animation = 'retract 0.25s ease'
    pauseButton.style.display = 'none';
    resetButton.style.display = 'grid';
    resetButton.style.opacity = '1'
  }
  if(wasReset === true) {
    resumeButton.style.display = 'grid';
    resumeButton.style.animation = 'retract 0.25s ease'
    pauseButton.style.display = 'none';
    resetButton.style.opacity = '0';
    setTimeout(() => {resetButton.style.display = 'none'}, 2000)
  }
}

function blinking(param) {
  if(blink === false) {
      timeElement.classList.add("blinking")
      blink = true;
  } else if(blink === true) {
    timeElement.classList.remove("blinking")
    blink = false;
  }
}


function addLap() {
  let html = ``;
  laps.push(
    time = {
      hours: hoursElement.innerHTML, 
      min: minutesElement.innerHTML, 
      sec: secondsElement.innerHTML,
      ms: milliSecondsElement.innerHTML
  });
  laps.forEach(() => {
    if(hoursElement.innerHTML === '' && minutesElement.innerHTML === '' && secondsElement.innerHTML === '00' && milliSecondsElement.innerHTML === '00') {
      html = '<h1 style = "font-size: 6rem;">😶</h1>'
    } else if(time.hours === '' && time.min >= 1) {
      html = `<h1>Lap => ${time.min} : ${time.sec} : ${time.ms}</h1>`;
    } else if(time.hours === '' && time.min === '') {
       html = `<h1>Lap => ${time.sec} : ${time.ms}</h1>`;
    } 

    if(lapsElement.innerHTML === `<h1>No Laps.</h1>`) {
      html = ``;
      if(hoursElement.innerHTML === '' === '' && timeElement.innerHTML === '00' && milliSecondsElement.innerHTML === '00') {
        html = '<h1>😶</h1>'
      } else if(time.hours === '' && time.min >= 1) {
          html = `<h1>Lap => ${time.min} : ${time.sec} : ${time.ms}</h1>`;
      } else if(time.hours === '' && time.min === '' && lapsElement.innerHTML !== `<h1>No Laps.</h1>`) {
          html = `<h1>Lap => ${time.sec} : ${time.ms}</h1>`;
      } 
    } 
  })
  htmlCode += html;
  renderLap();
  changeButton();
}

function clearLap() {
  html = ``;
  htmlCode = html;
}

function renderLap() {
  lapsElement.innerHTML = `${htmlCode}`;
}