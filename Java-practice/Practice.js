var userNumbers = [];
var userNumber = 0;
var sum = 0;
while (userNumber != -1) {
  userNumber = Number(
    prompt("Enter a number\n if you dont want a number put -1")
  );
  if (userNumber != -1) {
    userNumbers.push(userNumber);
  }
}
for (var i = 0; i < userNumbers.length; i++) {
  sum = sum + userNumbers[i];
}
console.log("Average:", sum / userNumbers.length);
