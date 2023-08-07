var userNumber = Number(prompt("Enter a Number?", 0));
var i = 0;
var sum = 0;
while (userNumber / 10 != 0) {
  sum = sum + (userNumber % 10);
  userNumber = Math.floor(userNumber / 10);
  i++;
}
alert("the sum is" + +sum);
