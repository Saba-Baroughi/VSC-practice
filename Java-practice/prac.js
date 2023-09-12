var todosArray = [
  { id: 1, title: "learn js", isDoing: false },
  { id: 2, title: "make footer", isDoing: true },
  { id: 3, title: "design", isDoing: false },
  { id: 4, title: "vue js", isDoing: false },
];

var userMenu = prompt(
  "Choose one of them: \n 1. Add Todo \n 2. Remove Todo \n 3. Do Todo"
);
if (userMenu === "1") {
  var newTodoName = prompt("Enter The New Todo Name: ", "");
  var newTodoObject = {
    id: 5,
    title: newTodoName,
    isDoing: false,
  };
  todosArray.push(newTodoObject);
  console.log(todosArray);
} else if (userMenu === "2") {
  var removeTodoName = prompt("Enter The New Todo Name: ", "");
  var removableTodoIndex = todosArray.findIndex(function (works) {
    return works.title === removeTodoName;
  });
  todosArray.splice(removableTodoIndex, 1);
  console.log(todosArray);
} else if (userMenu === "3") {
  var editableTodoName = prompt("Enter The Editable Todo Name: ", "");
  todosArray.forEach(function (todo) {
    if (todo.title === editableTodoName) {
      todosArray.isDoing = true;
    }
  });
  console.log(todosArray);
} else {
  alert("Enter the correct option");
}
