var dataBase = [
  { id: 1, name: "saba", age: 32 },
  { id: 2, name: "arash", age: 34 },
  { id: 3, name: "Nasrin", age: 32 },
  { id: 4, name: "Shahin", age: 12 },
  { id: 5, name: "Mehri", age: 23 },
  { id: 6, name: "Jafar", age: 67 },
];
var isInAge = dataBase.every(function (members) {
  console.log(members);
  return members.age > 18;
});
if (isInAge == true) {
  alert("join to the conforence");
} else {
  alert("you are not allowed");
}
