let stars = 5;
console.log("This code is before the conditional, it will run regardless.");
if (stars === 4) {
  console.log("You have 5 stars.");
}
console.log("This code is after the conditional, it will run regardless.");

let random = Math.random();
if (random >= 0.5) {
  console.log("If you can see this, your number was more than 0.5!");
  console.log(random);
}
if (random <= 0.5) {
  console.log("If you can see this, your number was less than 0.5!");
  console.log(random);
}
