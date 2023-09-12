var tasksArray = {
  ali: ["html", "css", "js"],
  amin: ["react", "vue", "angular"],
  mohammad: ["seo", "link building"],
  amir: ["admin", "content"],
};

var newTaskname = prompt("Enter The New Task: ");
var employName = prompt("Enter The Employ Name: ");
console.log(tasksArray[employName]);
var employTasks = tasksArray[employName]; //add an variable to save the old tasks and add new ones
employTasks.push(newTaskname);
console.log(employTasks);
