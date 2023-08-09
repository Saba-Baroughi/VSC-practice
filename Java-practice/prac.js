var users = [
  { id: 1, name: "saba", family: "Bonab", age: "35", Email: "saba@gmail.com" },
  { id: 2, name: "Arash", family: "Nasl", age: "35", Email: "Arash@gmail.com" },
  {
    id: 3,
    name: "Shahin",
    family: "Dada",
    age: "55",
    Email: "Shahin@gmail.com",
  },
];

var userName = prompt("Enter the name:", "Jack");
var userFamily = prompt("Enter your Family:");
var userAge = prompt("Enter your Age:", 18);
var userEmail = prompt("Enter your email:");

if (userName.length < 3 || userName > 10) {
  alert("enter the proper name :");
} else if (userFamily.length < 3 || userFamily.length > 15) {
  alert("enter 3-15 character");
} else if (isNaN(userAge) || userAge.length > 3) {
  alert("enter a number");
} else {
  var newUser = {
    id: 4,
    name: userName,
    family: userFamily,
    age: userAge,
    email: userEmail,
  };
  users.push(newUser);
}
console.log(users);
