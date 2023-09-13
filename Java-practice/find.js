var usersData = [
  { id: 1, username: "amin", password: "01010101", email: "amin@gmail.com" },
  { id: 2, username: "ali", password: "ali9021", email: "ali@gmail.com" },
  { id: 3, username: "amir", password: "amir56", email: "amir@gmail.com" },
  { id: 4, username: "babak", password: "babak2000", email: "babak@gmail.com" },
  { id: 5, username: "hasan", password: "hasan_r", email: "hasan@gmail.com" },
  { id: 6, username: "reza", password: "reza.xyz", email: "reza@gmail.com" },
];

var username = prompt("Enter Your UserName: ");
var userMainData = usersData.find(function (users) {
  return users.username === username;
});
if (userMainData === undefined) {
  alert("register in the site");
} else {
  alert("Your password is:" + userMainData.password);
}
