const randomButton = document.querySelector("#random");

randomButton.addEventListener("click", function () {
  const bckgrndClr = generateRandomCOlor();
  document.body.style.backgroundColor = bckgrndClr;
  const colorh1 = document.querySelector("#color");
  colorh1.textContent = bckgrndClr;
});

const generateRandomCOlor = function () {
  const randomRGB = Math.floor(Math.random() * 256);
  const randomRGB2 = Math.floor(Math.random() * 256);
  const randomRGB3 = Math.floor(Math.random() * 256);
  return `rgb(
      ${randomRGB},${randomRGB2},${randomRGB3}
    )`;
};

// if (`${randomRGB} + ${randomRGB2}+ ${randomRGB3}` > 60) {
//     const h1s = document.querySelectorAll("h1");
//     h1s.style.color = "white";
//   }
