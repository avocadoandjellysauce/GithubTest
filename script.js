// Generate random word

var rw = "";
var init = "";
var fin = "";
const clue = document.getElementById("2");

function randWord() {
  rw = splittedWords[Math.floor(Math.random() * splittedWords.length)];
  init = rw.charAt(0);
  fin = rw.charAt(rw.length - 1);
  clue.innerHTML = init.toUpperCase() + fin.toUpperCase();
}

// Checks whether the inputed word is valid
// i.e. it is in the library and starts and ends with the same letters as rw (case insensitive)
// If valid, increase score by 5 and time by 3 s

var score = 0;

function validWord(event) {
  event.preventDefault();
  let guess = document.getElementById("prompt").value.toLowerCase();
  if (splittedWords.includes(guess) && guess.charAt(0) == init && guess.charAt(guess.length - 1) == fin && i != 0) {
    score += 5;
    i += 3;
    randWord();
  }
  form.reset();
}

// Game over screen

const form = document.getElementById("box");

function gameOver() {
  form.setAttribute("hidden","");
  clue.innerHTML = "Your final score is " + score;
  score = 0;
  const retry = document.createElement("button");
  retry.innerHTML = "Retry?";
  retry.setAttribute("onclick", "reinit();");
  retry.setAttribute("id", "3");
  document.getElementById("gameBox").appendChild(retry);
}

// Function that rests the game

function reinit() {
  form.removeAttribute("hidden");
  document.getElementById("3").remove();
  randWord();
  timer.innerHTML = startingTime;
  i = startingTime;
  startTimer();
}

// Counts down to 0

const timer = document.getElementById("1");

var startingTime = 30;
var i = startingTime;

function startTimer(){
  const interval = setInterval(function() {
    i--;

    if (i == 0) {
      clearInterval(interval);
      timer.innerHTML = "Time's up!";
      gameOver();
    }

    else document.getElementById("1").innerHTML = i;
  }, 1000);
}

// Initialize: run the functions

randWord();
startTimer();