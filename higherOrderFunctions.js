// function getRandomNumberFrom1to20() {
//   let getIt = Math.floor(Math.random() * 20) + 1;
//   console.log(getIt);
// }

// function getThatBUt10Times(xyz) {
//   for (let i = 0; i < 10; i++) {
//     xyz();
//   }
// }

// getThatBUt10Times(getRandomNumberFrom1to20);

// function makeAFunction() {
//   const ranDOM = Math.random();
//   if (ranDOM > 0.5) {
//     return function () {
//       console.log("Yay, you got the good function!");
//       console.log("There was 1 million dollars behind this curtain.");
//     };
//   } else {
//     return function () {
//       console.log("You got the bad function.");
//       alert("This should annoy you");
//       alert("This should annoy you");
//       alert("This should annoy you");
//       alert("This should annoy you");
//       alert("This should annoy you");
//     };
//   }
// }
// let mysteriousOutcome = makeAFunction();

// mysteriousOutcome();

// function betweenChecker(num) {
//   if (num >= 50 && num <= 100) {
//     console.log("Yes, it is between 50 and 100");
//   } else if (num < 50) {
//     console.log("No, it is less than 50.");
//   } else if (num > 100) {
//     console.log("No, it is more than 100.");
//   }
// }

//This will return true or false based on the
//number we use when calling the function.
function testBetweenChecker(num) {
  return num >= 50 && num <= 100;
}

function betweenChecker(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}
//We can now save this function in different variables
//Each time we will give that specific variable name a min and a max
//So we can name it accordingly.
//Once we call the new variable function, we can enter a number, and it
//will check if it is between the min and max we assigned it!

function twoPasswords(pass1, pass2) {
  return function (attemptedPass) {
    return pass1 === attemptedPass || pass2 === attemptedPass;
  };
}
//This one checks if the attempt is one of 2 options,
//it returns true if either one matches.

function loginCredentials(username, password) {
  return function (usernameAttempt, passwordAttempt) {
    return username === usernameAttempt && password === passwordAttempt;
  };
}
