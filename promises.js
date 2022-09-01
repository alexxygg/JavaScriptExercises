// const doSOmethingOrNot = (number) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay < 4000) {
//         resolve(`We did it! Here is the data from ${number}̣̣.`);
//       } else {
//         reject("Sorry, we failed you master.");
//       }
//     }, delay);
//   });
// };
// doSOmethingOrNot("1")
//   .then(() => {
//     console.log("First level passed.");
//     return doSOmethingOrNot("1");
//   })
//   .then(() => {
//     console.log("Second level passed.");
//     return doSOmethingOrNot("2");
//   })
//   .then(() => {
//     console.log("Third level passed.");
//     return doSOmethingOrNot("3");
//   })
//   .catch(() => {
//     console.log("Something failed along the way.");
//   });

// new Promise((resolve, reject) => {
//   // Leaving this code empty will return a pending promise.
//   resolve(); // This will return a resolved promise.
//   reject(); // This will return a rejceted promise.
// });

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const randomTimeout = Math.random();
//     setTimeout(() => {
//       if (randomTimeout < 0.7) {
//         resolve("HERES YOUR DATA");
//       }
//       reject("SORRY NO DATA");
//     }, 1000);
//   });
// };

// fakeRequest("google.com")
//   .then((data) => {
//     console.log("WE GOOD");
//     console.log("DATA FROM", data);
//   })
//   .catch((err) => {
//     console.log("WE AINT GOOD", err);
//   });

// const colorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// colorChange("red", 1000)
//   .then(() => colorChange("orange", 1000))
//   .then(() => colorChange("yellow", 1000))
//   .then(() => colorChange("green", 1000))
//   .then(() => colorChange("blue", 1000))
//   .then(() => colorChange("purple", 1000));
