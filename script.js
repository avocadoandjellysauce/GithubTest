// Word library 
    
const words = ["HELLO","HALLO","WORLD","WELD"];
    
// Generate random word

var rw = "";
var init = "";
var fin = "";
const clue = document.getElementById("2");

function randWord() {
  rw = splittedWords[Math.floor(Math.random() * words.length)];
  init = rw.charAt(0);
  fin = rw.charAt(rw.length - 1);
  clue.innerHTML = init + fin;
}

randWord();

// Checks whether the inputed word is valid
// i.e. it is in the library and starts and ends with the same letters as rw (case insensitive)
// If valid, increase score by 1

var score = 0;

function validWord(event) {
  event.preventDefault();
  let guess = document.getElementById("prompt").value.toUpperCase();
  if (words.includes(guess) && guess.charAt(0) == init && guess.charAt(guess.length - 1) == fin && i != 0) {
    score++;
    randWord();
  }
}

// Game over screen

const form = document.getElementById("box");

function gameOver() {
  form.setAttribute("hidden","");
  clue.innerHTML = "Your final score is " + score;
  const retry = document.createElement("button");
  retry.innerHTML = "Retry?";
  retry.setAttribute("onclick", "reinit();");
  retry.setAttribute("id", "3");
  document.body.appendChild(retry);
}

// Function that rests the game

function reinit() {
  form.removeAttribute("hidden");
  document.getElementById("3").remove();
  randWord();
  timer.innerHTML = 10;
  i = 10;
  startTimer();
}

// Counts down to 0

const timer = document.getElementById("1");

var i = 10;

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

startTimer();
</script>

