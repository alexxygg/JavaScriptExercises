let addTask = "add";
let removeTask = "remove";
let listAll = "list";
let quit = "quit";
let userSelection = prompt(
  "What do you want to do? Add task, Remove task, List all or Quit? Enter add, remove, list or quit."
).toLowerCase();
const userList = [];
while (userSelection !== quit) {
  if (userSelection === quit) {
    alert("You have quit the To-Do-List App");
    break;
  } else if (userSelection === addTask) {
    let addedTask = prompt("Enter the task!");
    userList.push(addedTask);
    alert("Task added to list.");
  } else if (userSelection === removeTask) {
    let indexToRemove = parseInt(
      prompt("Enter the index for the task you want to remove.")
    );
    if (!Number.isNaN(indexToRemove)) {
      userList.splice(indexToRemove, 1);
      alert("Task removed from list!");
    } else {
      alert("Unknown index");
    }
  } else if (userSelection === listAll) {
    console.log("*****************");
    console.log("     TO DO LIST");
    for (i = 0; i < userList.length; i++) {
      console.log(`${i}.`, userList[i]);
    }
    console.log("*****************");
  }
  userSelection = prompt(
    "What do you want to do? Add task, Remove task, List all or Quit? Enter add, remove, list or quit."
  );
}
