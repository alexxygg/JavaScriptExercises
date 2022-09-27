const btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", function () {
  alert("Hi!");
});

const helloBtn = document.querySelector("#hello");
const goodbyeBtn = document.querySelector("#goodbye");

helloBtn.addEventListener("click", function () {
  console.log("hello");
});

goodbyeBtn.addEventListener("click", function () {
  console.log("goodbye");
});
