// input.addEventListener("keydown", function () {
//   console.log("Key was pressed.");
// });

// input.addEventListener("keyup", function () {
//   console.log("Key was released.");
// });

// const input = document.querySelector("input");

// input.addEventListener("keydown", function (eventObject) {
//   console.log(eventObject.key);
//   console.log(eventObject.code);
// });

window.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "ArrowUp":
      console.log("Arrow UP!");
      break;
    case "ArrowDown":
      console.log("Arrow DOWN!");
      break;
    case "ArrowLeft":
      console.log("Arrow LEFT!");
      break;
    case "ArrowRight":
      console.log("Arrow RIGHT!");
      break;
    default:
      console.log("Not a direction key");
  }
});
