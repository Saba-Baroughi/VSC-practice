var users = ["ali", "memo", "hesi", "majid"];
var newUsers = prompt("enter user name:");
var isLogin = users.includes(newUsers);
if (isLogin === true) {
  console.log("welcome to...");
} else {
  console.log("open an account firstly");
}
