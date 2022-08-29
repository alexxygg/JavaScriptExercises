const changeInput = document.querySelector("#change");

changeInput.addEventListener("change", function (event) {
  console.log(
    "User left the input field/clicked away with at least one change made to the input field."
  );
});

const input = document.querySelector("#input");

input.addEventListener("input", function (event) {
  console.log("User made a change inside the input field.");
});

const livePreview = document.querySelector("#livePreview");
const emptyH1 = document.querySelector("#empty");
livePreview.addEventListener("input", function (ee) {
  emptyH1.innerText = livePreview.value;
});

const usernameInput = document.querySelector("#username");
const h1 = document.querySelector("#h1");

usernameInput.addEventListener("input", function () {
  if (!this.value) {
    h1.innerText = "Enter Your Username";
  } else {
    h1.innerText = `Welcome, ${this.value}`;
  }
});
