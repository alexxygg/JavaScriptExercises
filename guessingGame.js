let maximum = parseInt(prompt("Enter the maximum number."));

const targetNumber = Math.floor(Math.random() * maximum) + 1;
console.log(targetNumber);
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number."));
}
let userGuess = parseInt(prompt("Enter your guess!"));
let numberOfAttempts = 1;

while (parseInt(userGuess) !== targetNumber) {
  numberOfAttempts++;
  if (userGuess === "quit") break;
  if (userGuess > targetNumber) {
    userGuess = prompt("TOO HIGH! Enter another guess!");
  } else if (userGuess < targetNumber) {
    userGuess = prompt("TOO LOW! Enter another guess!");
  }
}
if (userGuess === "quit") {
  alert("You have quit the game");
} else {
  alert(`YOU GOT IT!!! Attempts:${numberOfAttempts}!`);
}
