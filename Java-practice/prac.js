var userNumber = 0;
var sum = 0;
var counter = 0;

while (userNumber != -1) {
  sum += userNumber;

  userNumber = Number(
    prompt("Enter a number\n\n if yo dont have enter a number put -1")
  );
  if (userNumber != -1) {
    counter++;
  }
}
console.log(counter);
