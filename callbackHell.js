// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "yellow";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "blue";
//           setTimeout(() => {
//             document.body.style.backgroundColor = "purple";
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// settimeoutFunction("red", 1000, () => {
//   settimeoutFunction("orange", 1000, () => {
//     settimeoutFunction("yellow", 1000, () => {
//       settimeoutFunction("green", 1000, () => {
//         settimeoutFunction("blue", 1000, () => {
//           settimeoutFunction("purple", 1000, () => {});
//         });
//       });
//     });
//   });
// });

//The color is random every time because we declared the r,g and b
//colors inside the function. Otherwise, the values for each of them
//would only be defined once.
function randomRGB1() {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
}

//We run this code immediately, that way there is no 2 second delay before
//our setInterval kicks in!
randomRGB1();
//This code will run every 2 seconds.
setInterval(randomRGB1, 2000);
//We could define the function inside setInterval, but then we wouldn't be able
// to call it from outside for the first no-delay run we need.
