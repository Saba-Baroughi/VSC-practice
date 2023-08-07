var userNumber = Number(prompt("Enter a Number?", 0));
var i = 0;
var counter = 0;
while (userNumber / 10 != 0) {
  counter++;
  userNumber = Math.floor(userNumber / 10);
  i++;
}
alert(counter);
