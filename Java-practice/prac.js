var users = ["saba", "memo", "arash", "heso", "majid"];
var userIndex = users.findIndex(function (user) {
  console.log(user);
  return user == "arash";
});
console.log(userIndex);
