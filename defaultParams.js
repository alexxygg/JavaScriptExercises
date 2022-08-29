//This function will return undefined if no value is passed as an argument.
let randomNumber = function (number) {
  Math.floor(Math.random() * number);
};

//Here we are creating a default param with an if loop.
let randomNumber2 = function (number) {
  if (number === undefined) {
    number = 6;
  }
  return Math.floor(Math.random() * number) + 1;
};

//And here we created a default param, much shorter than before.
let randomNumber3 = function (number = 6) {
  return Math.floor(Math.random() * number);
};

let greet = function (
  name = "there",
  greeting = "hope you're having a great day"
) {
  return `"Hi ${name}, ${greeting}!`;
};
