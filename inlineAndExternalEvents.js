const btn1 = document.querySelector("#btn1");

btn1.onclick = function () {
  console.log("Hi");
  console.log("Thanks for clicking me!");
};

const btn2 = document.querySelector(".btn2");

function pleaseStop() {
  console.log("AHHH");
  console.log("I told you not to!");
}

btn2.onmouseenter = pleaseStop;
