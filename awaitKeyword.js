// const colorsChanging = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// async function nowDoTheChanges() {
//   await colorsChanging("red", 1000);
//   await colorsChanging("orange", 1000);
//   await colorsChanging("yellow", 1000);
//   await colorsChanging("green", 1000);
//   await colorsChanging("blue", 1000);
//   await colorsChanging("purple", 1000);
//   return true;
// }

// async function nowPrintThis() {
//   await nowDoTheChanges();
//   console.log("We did it!");
//   return true;
// }

// async function andNowThis() {
//   await nowPrintThis();
//   setTimeout(() => {
//     console.log("You should see this 2 seconds after the previous message.");
//   }, 2000);
//   return true;
// }
// nowDoTheChanges();
// nowPrintThis();

// andNowThis();

async function andFinallyThis() {
  try {
    await andNowThis();
    console.log("Ok we good now.");
  } catch (e) {
    console.log("We got error: ", e);
  }
}

andFinallyThis();
