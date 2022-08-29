// const userPassword = prompt("Enter a password.");
// if (userPassword.length >= 8) {
//   if (userPassword.indexOf(" ") === -1) {
//     alert("Awesome, this is a valid password!");
//   } else {
//     alert("Your password can not contain spaces.");
//   }
// } else {
//   alert("Your password is too short.");
// }

//  if (userPassword.indexOf(" ") === -1) {
//Here we make sure there are no spaces. If -1 is returned,
//it means we could not find any space in the whole entry.

// const securePassword = prompt(
//   "Enter a new password, make sure it is secure.It must include an excalmation point.(!)"
// );

//Here it checks if it is long enough. Or not.
// if (securePassword.length >= 10) {
//   alert("long enough");
// } else {
//   alert("not long enough");
// }

//Here we have both things working, checking space and lenght, but in 2 logics.
// if (securePassword.length >= 10) {
//   alert("long enough");
// } else {
//   alert("not long enough");
// }

// if (securePassword.indexOf(" ") === -1) {
//   alert("no spaces, nice");
// } else {
//   alert("Remember, no spaces allowed.");
// }

//Here they are all toggether, we cut the second code and pasted it
//right after the opening bracket for our first if statement
// if (securePassword.length >= 10) {
//   alert("long enough");
//   if (securePassword.indexOf(" ") === -1) {
//     alert("no spaces, nice");
//   } else {
//     alert("Remember, no spaces allowed.");
//   }
// } else {
//   alert("not long enough");
// }

//And here we just removed the alert  for long enough
// if (securePassword.length >= 10) {
//   if (securePassword.indexOf(" ") === -1) {
//     alert("Finally, a valid password.");
//   } else {
//     alert("Remember, no spaces allowed.");
//   }
// } else {
//   alert("not long enough");
// }

// const chooseNumber = prompt("Choose between 6 and 7, but do not enter 8!");

// if (chooseNumber.indexOf("8") === 0) {
//   alert("Now you will face the consequences of choosing 8!");
// } else {
//   alert("Good choice, at least it wasn´t an 8...");
// }

// if (chooseNumber == 6) {
//   alert("but 6 is not my favorite");
// } else if (chooseNumber == 7) {
//   alert("7 is my favorite number!");
// } else {
//   alert("Enter one of the numbers we mentioned.");
// }

// const num = 102;

// if (num <= 100) {
//   if (num >= 50) {
//     console.log("HEY!");
//   }
// } else {
//   if (num < 103) {
//     if (num % 2 === 0) {
//       console.log("YOU GOT ME!");
//     }
//   }
// }

const findingSeven = prompt("Try to find the number based on the code.");

if (findingSeven >= 8) {
  alert("Not quite...");
}

if (findingSeven <= 6) {
  alert("Not quite...");
}

if (findingSeven == 7) {
  alert("You got it!");
}
