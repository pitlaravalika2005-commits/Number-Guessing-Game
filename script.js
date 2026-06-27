let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let score = 100;
let gameOver = false;

function checkGuess() {
  if (gameOver) return;

  const guessInput = document.getElementById("guessInput");
  const guess = Number(guessInput.value);
  const message = document.getElementById("message");

  if (!guess || guess < 1 || guess > 100) {
    message.style.color = "yellow";
    message.textContent = "⚠️ Enter a valid number between 1 and 100!";
    return;
  }

  attempts++;
  document.getElementById("attempts").textContent = attempts;

  score -= 10;
  document.getElementById("score").textContent = score;

  if (guess === randomNumber) {
    message.style.color = "#00ff9d";
    message.textContent = `🎉 Correct! The number was ${randomNumber}`;
    gameOver = true;
  }
  else if (guess < randomNumber) {
    message.style.color = "#ffd166";
    message.textContent = "📉 Too Low! Try again.";
  }
  else {
    message.style.color = "#ff6b6b";
    message.textContent = "📈 Too High! Try again.";
  }

  if (attempts >= 10 && !gameOver) {
    message.style.color = "red";
    message.textContent = `💀 Game Over! The number was ${randomNumber}`;
    gameOver = true;
  }

  guessInput.value = "";
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  score = 100;
  gameOver = false;

  document.getElementById("attempts").textContent = attempts;
  document.getElementById("score").textContent = score;
  document.getElementById("message").textContent = "";
  document.getElementById("guessInput").value = "";
}