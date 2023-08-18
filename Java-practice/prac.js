var users = [
  { id: 1, name: "Saba", family: "bonab", age: 35 },
  { id: 2, name: "arash", family: "nasl", age: 35 },
];
var userName = prompt("enter you name:");
var userFamily = prompt("enter your family");
var userAge = Number(prompt("enter your age"));
if (userName.length < 3 || userName.length > 10) {
  alert("enter a valid name");
} else if (userFamily.length > 15 || userFamily.length < 3) {
  alert("enter the valid last name");
} else if (isNaN(userAge) || userAge.length > 3) {
  alert("enter a proper number:");
} else {
  var newUser = { id: 3, name: userName, family: userFamily, age: userAge };
  users.push(newUser);
}
console.log(users);
