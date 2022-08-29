// function add2(a, b) {
//   console.log(a + b);
// }

// let sum2 = add2(7, 4);
// //Here, sum2 returns undefined

// function add(x, y) {
//   return x + y;
// }

// let sum = add(7, 4);

// //Here, sum returns 11

// function add(x, y) {
//   let sum = x + y;
//   return sum;
// }

// add(7, 4);

// //Here, sum also returns 11

// function multiply(xx, yy) {
//   if (typeof xx !== "number" || typeof yy !== "number") {
//     return false;
//   }
//   return xx * yy;
// }

// multiply(5, 5);
// //Here the code will not continue as soon as one of the 2 arguments is not a number.
// //It will show false, or it will show the product of the 2 numbers ONLY.

// function isShortsWeather(temperature) {
//   if (temperature >= 75) {
//     return true;
//   }
//   return false;
// }

// function lastElement(array) {
//   if (array.length === 0) {
//     return null;
//   }
//   return array[array.length - 1];
// }

// function capitalize(string) {
//   let firstLetter = string.slice(0, 1);
//   let capitalFirstLetter = firstLetter.toUpperCase();
//   let completeCapitalize = capitalFirstLetter + string.slice(1);
//   return completeCapitalize;
// }

// function capitalize2(string2) {
//   return string2[0].toUpperCase() + string2.slice(1, string2.length);
// }

// function sumArray(array) {
//   let summer = 0;

//   for (let i = 0; i < array.length; i++) {
//     summer += array[i];
//   }
//   return summer;
// }
// function returnDay(dayOfWeek) {
//   if (dayOfWeek === 1) {
//     console.log("Monday");
//   } else if (dayOfWeek === 2) {
//     console.log("Tuesday");
//   } else if (dayOfWeek === 3) {
//     console.log("Wednesday");
//   } else if (dayOfWeek === 4) {
//     console.log("Thursday");
//   } else if (dayOfWeek === 5) {
//     console.log("Friday");
//   } else if (dayOfWeek === 6) {
//     console.log("Saturday");
//   } else if (dayOfWeek === 7) {
//     console.log("Sunday");
//   } else {
//     console.log(null);
//   }
// }

// let daysOfWeek = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// function returnDay(dayOfWeek) {
//   for (let i = 0; i < daysOfWeek.length; i++) {

//   }
//   console.log(daysOfWeek[i]);
//   console.log(null);
// }

// function returnDay(dayOfWeek) {
//   let nameDay = Object.values(daysOfWeek);

//   if (dayOfWeek == 1) {
//     return nameDay[0];
//   } else if (dayOfWeek == 2) {
//     return nameDay[1];
//   } else if (dayOfWeek == 3) {
//     return nameDay[2];
//   } else if (dayOfWeek == 4) {
//     return nameDay[3];
//   } else if (dayOfWeek == 5) {
//     return nameDay[4];
//   } else if (dayOfWeek == 6) {
//     return nameDay[5];
//   } else if (dayOfWeek == 7) {
//     return nameDay[6];
//   } else {
//     return null;
//   }
// }

// let daysOfWeek = {
//   1: "Monday",
//   2: "Tuesday",
//   3: "Wednesday",
//   4: "Thursday",
//   5: "Friday",
//   6: "Saturday",
//   7: "Sunday",
// };

function returnDay(dayOfWeek) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (dayOfWeek < 1 || dayOfWeek > 7) {
    return null;
  }
  return daysOfWeek[dayOfWeek - 1];
}
