var i = 0;
var sum = 0;
while (i < 5) {
  i++;
  var userNumber = Number(prompt("Enter a number:", 0));
  sum = sum + userNumber;
}
alert("Average is:" + sum / 5);
