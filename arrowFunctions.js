// const timesTwo = function (x) {
//   return x * 2;
// };

// const arrowFunctionTimesTwo = (x) => {
//   return x * 2;
// };

// const summy = function (x, y) {
//   return x + y;
// };

// const arrowFunctionSummy = (x, y) => {
//   return x + y;
// };

// //Both arrow functions will give us a random number from 1 to 100.
// const randomNumber1to100 = () => {
//   return Math.floor(Math.random() * 100) + 1;
// };

// const randomNumber1to100Implicit = () => Math.floor(Math.random() * 100) + 1;

// //No arrow function
// const times2RegularFunction = function (x) {
//   return x + y;
// };

// //Arrow function
// const times2ArrowFunction = (x) => {
//   return x + y;
// };

// //No return or curly brackets
// const times2ArrowNoReturnOrBrackets = (x) => x + y;

const movies = [
  { movieName: ". The Lord of the Rings: The Return of the King", score: 8.9 },
  {
    movieName: ". The Lord of the Rings: The Fellowship of the Ring",
    score: 8.8,
  },
  { movieName: ". The Lord of the Rings: The Two Towers", score: 8.7 },
];

const movieScoreString = movies.map(function (mvie) {
  return `${mvie.movieName} has a score of ${mvie.score * 10}/100!`;
});

const arrowFunctionmovieScoreString = movies.map(
  (mvie) => `${mvie.movieName} has a score of ${mvie.score * 10}/100!`
);
