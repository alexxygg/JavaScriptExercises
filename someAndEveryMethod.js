const testScores = [85, 81, 77, 95, 84, 97, 67, 80, 70, 92, 83];

//Returns false, at least one score is less than 71.
const moreThan70 = testScores.every((score) => score > 70);

//Returns true, all scores are at least 61.
const moreThan60 = testScores.every((score) => score > 60);

//Returns true, at least one score is more than 90.
const anyMoreThan90 = testScores.some((score) => score > 90);

//Returns false, NONE of the scores are more than 98.
const anyMoreThan98 = testScores.some((score) => score > 98);
