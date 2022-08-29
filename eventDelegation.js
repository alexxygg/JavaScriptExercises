const ul = document.querySelector("#ul");
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const submitButton = document.querySelector("#button");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newComment = document.createElement("li");
  newComment.innerText = input.value;
  ul.append(newComment);
  input.value = "";
});

ul.addEventListener("click", function (ev) {
  ev.target.nodeName === "LI" && ev.target.remove();
});
