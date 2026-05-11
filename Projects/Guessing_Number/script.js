const num = Math.floor(Math.random() * (10 - 0 + 1)) + 0;

document.getElementById("guessButton").addEventListener("click", () => {
  const guess = Number(document.getElementById("guessInput").value);
    if (guess > num) {
      alert("OOPS! SORRY!!! TRY A SMALLER NUMBER.");
    } else if (guess < num) {
      alert("OOPS! SORRY!!! TRY A LARGER NUMBER.");
    } else if (guess === num) {
      alert("CONGRATULATIONS! YOU GUESSED THE NUMBER!");
      break;
    }
});
