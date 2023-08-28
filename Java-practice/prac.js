var users = [
  { id: 1, name: "saba", age: 23 },
  { id: 2, name: "seda", age: 67 },
  { id: 3, name: "seme", age: 83 },
  { id: 4, name: "sibel", age: 43 },
];
var userIndex = users.findIndex(function (user) {
  return user.name == "sibel";
});
console.log("index:" + userIndex);
