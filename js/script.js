


const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const moles2 = document.querySelectorAll('.mole2');

let lastHole;
let timeUp = false;
let score = 0;



function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function monster() {
  const time = randomTime(300, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) monster();
  }, time);
}

/* var timeLeft = 10;
var elem = document.getElementById('time');
var timerId = setInterval(countdown, 1000);


function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
} */



function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  monster();
  setTimeout(() => timeUp = true, 10000);
  startTimer();
}


function startTimer(){
  var countdown = 10;
  setInterval(function() {
    countdown--;
    if (countdown >= 0) {
      span = document.getElementById("time");
      span.innerHTML = countdown;
    }
    if (countdown === 0) {
        clearInterval(countdown);
    }
  }, 1000);
}

function lollipop(e) {
  if(!e.isTrusted) return; // cheater
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
  e.preventDefault();

}


moles.forEach(mole => mole.addEventListener('click', lollipop));
moles2.forEach(mole => mole.addEventListener('touchstart', lollipop));
