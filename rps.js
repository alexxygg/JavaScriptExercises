let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let i = 0;
let j = 0;
let gameOver = false;
let userGuess = prompt("Rock, Paper or Scissors?").toLowerCase();

let cpuPlay = Math.floor(Math.random() * 3) + 1;

while (i != 3 && j != 3) {
  gameOver = false;
  cpuPlay = Math.floor(Math.random() * 3) + 1;
  if (userGuess === rock && cpuPlay === 1) {
    alert(`TIE!    Both you and the CPU chose ROCK! You:${i} CPU:${j} `);
  } else if (userGuess === rock && cpuPlay === 2) {
    j++;
    alert(
      `YOU LOSE!   You chose ROCK and the CPU chose PAPER! You:${i} CPU:${j} `
    );
  } else if (userGuess === rock && cpuPlay === 3) {
    i++;
    alert(
      `YOU WIN!   You chose ROCK and the CPU chose SCISSORS! You:${i} CPU:${j} `
    );
  } else if (userGuess === paper && cpuPlay === 1) {
    i++;
    alert(
      `YOU WIN!   You chose PAPER and the CPU chose ROCK! You:${i} CPU:${j} `
    );
  } else if (userGuess === paper && cpuPlay === 2) {
    alert(`TIE!    Both you and the CPU chose PAPER! You:${i} CPU:${j} `);
  } else if (userGuess === paper && cpuPlay === 3) {
    j++;
    alert(
      `YOU LOSE!   You chose PAPER and the CPU chose SCISSORS! You:${i} CPU:${j} `
    );
  } else if (userGuess === scissors && cpuPlay === 1) {
    j++;
    alert(
      `YOU LOSE!   You chose SCISSORS and the CPU chose ROCK! You:${i} CPU:${j} `
    );
  } else if (userGuess === scissors && cpuPlay === 2) {
    i++;
    alert(
      `YOU WIN!   You chose SCISSORS and the CPU chose PAPER! You:${i} CPU:${j} `
    );
  } else if (userGuess === scissors && cpuPlay === 3) {
    alert(`TIE!    Both you and the CPU chose SCISSORS! You:${i} CPU:${j} `);
  }
  if (i === 3) {
    gameOver = true;
    alert(`YOU WIN THE GAME! You:${i} CPU:${j}`);
    break;
  } else if (j === 3) {
    gameOver = true;
    alert(`CPU WINS THE GAME! You:${i} CPU:${j}`);
    break;
  }
  userGuess = prompt("Rock, Paper or Scissors?").toLowerCase();
}
