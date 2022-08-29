// const shoppingCartItems = [14.99, 17, 36.65, 12, 21.84, 152];

// let total = 0;
// for (let item of shoppingCartItems) {
//   total += item;
// }

// let total2 = shoppingCartItems.reduce(
//   (totalPrice, currentItem) => totalPrice + currentItem,
//   5
// );

// const testScores = [
//   83, 81, 84, 83, 99, 80, 93, 91, 95, 85, 97, 91, 89, 90, 94, 99, 94, 93, 94,
//   97, 98, 87,
// ];

// const highestScore = testScores.reduce((max, currentScore) => {
//   if (max > currentScore) {
//     return max;
//   } else {
//     return currentScore;
//   }
// });

// const lowestScore = testScores.reduce((min, currentScore) => {
//   if (min < currentScore) {
//     return min;
//   } else {
//     return currentScore;
//   }
// });

const topChampionsScorers = [
  { goals: 48, player: "Andriy Shevchenko" },
  { goals: 86, player: "Karim Benzema" },
  { goals: 48, player: "Zlatan Ibrahimović" },
  { goals: 71, player: "Raúl González" },
  { goals: 56, player: "Ruud van Nistelrooy" },
  { goals: 140, player: "Cristiano Ronaldo" },
  { goals: 52, player: "Thomas Müller" },
  { goals: 50, player: "Thierry Henry" },
  { goals: 86, player: "Robert Lewandowski" },
  { goals: 125, player: "Lionel Messi" },
  { goals: 46, player: "Filippo Inzaghi" },
];

const topScorer = topChampionsScorers.reduce((max, currentPlayer) => {
  if (max.goals > currentPlayer.goals) {
    return max;
  } else {
    return currentPlayer;
  }
});
