const checkBtn = document.querySelector("#check-btn");
const newGameBtn = document.querySelector("#new-game");
const numberLabel = document.querySelector("#text-box");
const guessesLeftLabel = document.querySelector(".guesses-left");
const HighscoreLabel = document.querySelector(".highscore");
const messageLabel = document.querySelector(".message");

let actualNumber = null;
let guessesLeft = 10;
let highscore = 0;

const showMessage = (mes) => (messageLabel.textContent = mes);

const startNewGame = function () {
  actualNumber = Math.floor(Math.random() * 100) + 1;

  guessesLeft = 10;
  HighscoreLabel.textContent = highscore;
  guessesLeftLabel.textContent = guessesLeft;
  numberLabel.value = "";
  showMessage("Hello ! Let's Start the Game💖");
};

const checkTheGuess = function () {
  if (guessesLeft === 0) {
    showMessage("Game Over 😣");
    return;
  }

  if (numberLabel.value === "") {
    showMessage("Enter a Number to Start 🤨");
    return;
  }

  const guess = Number(numberLabel.value);

  if (guess < 1 || guess > 100)
    showMessage("Enter a Number Between 1 and 100 🙃");
  else if (guess === actualNumber) {
    showMessage("Congrats! You Guessed it 🏆");
    if (guessesLeft > highscore) {
      highscore = guessesLeft;
      HighscoreLabel.textContent = highscore;
    }
  } else {
    showMessage(
      `Entered Number is ${guess > actualNumber ? "Higher ⬆" : "Lower ⬇"}`
    );

    guessesLeft--;
    guessesLeftLabel.textContent = guessesLeft;
  }
};

checkBtn.addEventListener("click", checkTheGuess);
newGameBtn.addEventListener("click", startNewGame);
startNewGame();
