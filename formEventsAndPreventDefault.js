// //No preventDefault
// form.addEventListener("submit", function () {
//   console.log("Form submitted.");
// });

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted.");
});

const commentForm = document.querySelector("#commentForm");
const commentInput = document.querySelector("#commentInput");
const commentsUL = document.querySelector("#commentsUL");
commentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newComment = document.createElement("LI");
  const theCommentFromUser = commentInput.value;
  newComment.innerText = theCommentFromUser;
  commentsUL.append(newComment);
  commentInput.value = "";
});

const form2 = document.querySelector("#form2");

const product = document.querySelector("#product");
const qty = document.querySelector("#qty");
const list = document.querySelector("#list");

form2.addEventListener("submit", function (event) {
  event.preventDefault();
  const newListing = document.createElement("li");
  newListing.innerHTML = `${qty.value} ${product.value}`;
  list.appendChild(newListing);
  product.value = "";
  qty.value = "";
});
