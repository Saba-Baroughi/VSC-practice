var userNumber = 0;
var sum = 0;
var counter = 0;

var userNumbers = [];
var userNumber = 0;
while (userNumber != -1) {
  userNumber = Number(
    prompt("enter a number \n \n if you do not want enter a number put -1")
  );
  if (userNumber != -1) {
    userNumbers.push(userNumber);
  }
}
console.log(userNumbers);
