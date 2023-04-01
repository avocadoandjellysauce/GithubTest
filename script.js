// List of elements to modify

const timer = document.getElementById("1");
const clue = document.getElementById("2");
const form = document.getElementById("box");
const scoreCounter = document.getElementById("scoreCounter");
const errorBox = document.getElementById("errorBox");

// Generate random word

var rw = "";
var init = "";
var fin = "";

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
  errorBox.innerHTML = "\n";
  if (splittedWords.includes(guess) && i != 0) {
    if (guess.charAt(0) == init && guess.charAt(guess.length - 1) == fin ) {
      score += 5;
      scoreCounter.innerHTML = "Your score: " + score;
      i += 3;
      randWord();
    }
    else {
      errorBox.innerHTML = "The word doesn't match the letters!";
    }
  }
  else {
    errorBox.innerHTML = "This isn't a valid word!";
  }
  form.reset();
}

// Game over screen

function gameOver() {
  form.setAttribute("hidden","");
  scoreCounter.innerHTML = "\n";
  errorBox.innerHTML = "\n";
  timer.innerHTML = "Your final score is " + score;
  clue.innerHTML = "\n";
  score = 0;
  const retry = document.createElement("button");
  retry.innerHTML = "Retry?";
  retry.setAttribute("onclick", "reinit();");
  retry.setAttribute("class","button");
  retry.setAttribute("id", "3");
  document.getElementById("gameBox").appendChild(retry);
}

// Function that rests the game

function reinit() {
  form.removeAttribute("hidden");
  scoreCounter.innerHTML = "Your score: 0";
  document.getElementById("3").remove();
  randWord();
  timer.innerHTML = startingTime;
  i = startingTime;
  startTimer();
}

// Counts down to 0

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