const sectionStop = document.querySelector("#sectionStop");
const buttonStop = document.querySelector("#buttonStop");

sectionStop.addEventListener("click", function (event) {
  event.stopPropagation();
});

buttonStop.addEventListener("click", function (event) {
  event.stopPropagation();
});
