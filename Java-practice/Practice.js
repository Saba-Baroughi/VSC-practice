let age = prompt("how old are you?");
let welcome;
if (age < 18) {
  welcome = function () {
    alert("hello");
  };
} else {
  welcome = function () {
    alert("Greeting");
  };
}
welcome();
