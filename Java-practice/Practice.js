var userNumber = Number(prompt("Enter The Numnber", 0));
var counter = 0;
if (userNumber == 0) {
  counter = 1;
} else {
  for (var i = 0; userNumber / 10 != 0; i++) {
    counter++;
    userNumber = Math.floor(userNumber / 10);
  }
}

alert(counter);
