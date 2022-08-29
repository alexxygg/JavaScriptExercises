const ages = {
  saul: 58,
  kim: 49,
  jesse: 41,
  walter: 65,
  gustavo: 62,
};

// for (let a in ages) {
//   console.log(
//     `${a}, who is a character from the Breaking Bad universe, is currently ${ages[a]} years old!`
//   );
// }

// for (let averageAge in ages) {
//   console.log(ages[averageAge] / 5);
// }

// let totalAge = 0;
// let theValues = Object.values(ages);
// for (let individualValue of theValues) {
//   totalAge += individualValue;
// }
// console.log(totalAge / theValues.length);

const testScores = {
  jay: 88,
  mark: 79,
  dan: 65,
  will: 95,
  gus: 92,
  paul: 85,
  ryan: 90,
  john: 100,
  angel: 90,
  matt: 56,
};

totalScores = 0;
let arrayTestScores = Object.values(testScores);
for (let scores of arrayTestScores) {
  totalScores += scores;
}
console.log(totalScores / arrayTestScores.length);
