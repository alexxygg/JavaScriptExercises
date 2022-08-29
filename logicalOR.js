const age = 23;

// if (age >= 0 && age < 5) {
//   alert("You are a baby, you can come in FREE.");
// } else if (age >= 5 && age < 10) {
//   alert("You are a kid, you pay $10.");
// } else if (age >= 10 && age < 65) {
//   alert("You are considered an adult, you pay $20.");
// } else if (age >= 65) {
//   alert("You are a senior, you can come in FREE.");
// }

// if (age < 5 || age >= 65) {
//   alert("You can come in for FREE!");
// } else if (age < 10) {
//   alert("You need to pay $10.");
// } else if (age < 65) {
//   alert("You need to pay $20.");
// }

if ((age >= 0 && age < 5) || age >= 65) {
  alert("You can come in for FREE!");
} else if (age >= 5 && age < 10) {
  alert("You need to pay $10.");
} else if (age >= 10 && age < 65) {
  alert("You need to pay $20.");
} else {
  alert("Please enter a valid age.");
}
//We covered 0,1,2,3,and 4  and also 65 and UP
//Then 5,6,7,8 and 9
//And then 10,11....63, and 64
//We gave an else for a negative number entry
