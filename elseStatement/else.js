// let userChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

// if (userChoice === "rock") {
//   alert("You chose Rock.");
// } else if (userChoice === "paper") {
//   alert("You chose Paper.");
// } else if (userChoice === "scissors") {
//   alert("You chose Scissors.");
// } else {
//   alert("Please enter one of the 3 valid options.");

let randomNumber = Math.floor(Math.random() * 10) + 1;

if (randomNumber > 5) {
  console.log("Your number is between 6 and 10!");
} else {
  console.log("Your number is between 1 and 5!");
}
console.log(randomNumber);

let phrase = "stop";
if (phrase === "stop") {
  console.log("red");
} else if (phrase === "slow") {
  console.log("yellow");
} else if (phrase === "go") {
  console.log("green");
} else {
  console.log("purple");
}
