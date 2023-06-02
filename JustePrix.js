// Paramètres du jeu
var minNumber = 1;
var maxNumber = 100;
var targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

// Timer
var timer = document.getElementById("timer");
var temps = 60;
var interval;

// État du jeu
var gameOver = false;

function startTimer() {
  updateTimer();
}

function updateTimer() {
  timer.innerHTML = temps + (temps === 1 ? " seconde" : " secondes");
  if (temps > 0) {
    temps = temps - 1;
    interval = setTimeout(updateTimer, 1000);
  } else {
    timer.innerHTML = "finiiiii !";
    gameOver = true;
  }
}

// Vérifier la proposition
function checkGuess() {
  if (gameOver) {
    return;
  }

  var input = document.getElementById("guessInput");
  var output = document.getElementById("guessOutput");
  var guessList = document.getElementById("guessList");
  var guess = parseInt(input.value);

  if (isNaN(guess)) {
    alert("Veuillez entrer un nombre valide !");
    return;
  }

  if (guess < minNumber || guess > maxNumber) {
    alert("Le nombre doit être compris entre " + minNumber + " et " + maxNumber + " !");
    return;
  }

  if (!interval) {
    startTimer();
  }

  if (guess === targetNumber) {
    output.innerHTML = "Félicitations, vous avez trouvé le juste prix !";
    guessList.innerHTML += "<li>" + guess + " = </li>";
    clearTimeout(interval); // Arrêter le timer lorsque la réponse est correcte
    gameOver = true;
  } else if (guess < targetNumber) {
    output.innerHTML = "Le nombre est plus grand que " + guess + " !";
    guessList.innerHTML += "<li>" + guess + " < </li>";
  } else {
    output.innerHTML = "Le nombre est plus petit que " + guess + " !";
    guessList.innerHTML += "<li>" + guess + " > </li>";
  }

  input.value = "";
  input.focus();
}
