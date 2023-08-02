var userName = prompt("Enter your username:");
var passWord = prompt("Enter your password");
if (userName.length < 3 || passWord.length < 8) {
  alert("Characters should be at least 3 and password should be 8 characters");
} else {
  alert("sign in");
}
