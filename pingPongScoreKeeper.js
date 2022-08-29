const player1AddButton = document.querySelector("#player1AddButton");
const player2AddButton = document.querySelector("#player2AddButton");
const resetButton = document.querySelector("#resetButton");
const p1span = document.querySelector("#p1span");
const p2span = document.querySelector("#p2span");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let gameOver = false;

player1AddButton.addEventListener("click", function () {
  if (!gameOver) {
    if (p1Score !== winningScore) {
      p1Score += 1;
      if (p1Score === winningScore) {
        p1span.classList.toggle("winner");
        p2span.classList.toggle("loser");
        gameOver = true;
      }
      p1span.textContent = p1Score;
    }
  }
});

player2AddButton.addEventListener("click", function () {
  if (!gameOver) {
    if (p2Score !== winningScore) {
      p2Score += 1;
      if (p2Score === winningScore) {
        p2span.classList.toggle("winner");
        p1span.classList.toggle("loser");
        gameOver = true;
      }
      p2span.textContent = p2Score;
    }
  }
});

resetButton.addEventListener("click", resetFunction);

const select = document.querySelector("#select");

select.addEventListener("change", function () {
  winningScore = parseInt(select.value);
  resetFunction();
});

function resetFunction() {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1span.textContent = 0;
  p2span.textContent = 0;
  p1span.classList.remove("winner", "loser");
  p2span.classList.remove("winner", "loser");
}
