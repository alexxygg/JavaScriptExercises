const randomRgb = function () {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  return `rgb(${randomR},${randomG},${randomB})`;
};

// const buttons = document.querySelectorAll("button");

// for (let button of buttons) {
//   button.addEventListener("click", function () {
//     button.style.backgroundColor = randomRgb();
//     button.style.color = randomRgb();
//   });
// }

// const divs = document.querySelectorAll("div");

// for (let div of divs) {
//   div.addEventListener("click", function () {
//     div.style.backgroundColor = randomRgb();
//     div.style.color = randomRgb();
//   });
// }

const genericFunction = function () {
  this.style.backgroundColor = randomRgb();
  this.style.color = randomRgb();
};

const divs = document.querySelectorAll("div");

for (let div of divs) {
  div.addEventListener("click", genericFunction);
}

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", genericFunction);
}
