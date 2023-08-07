var userNumber = 0;
var sum = 0;
var counter = 0;
while (userNumber != -1) {
  sum += userNumber;
  userNumber = Number(
    prompt("Enter the number\n\nIf you have not a number to add, Enter -1")
  );
  if (userNumber != -1) {
    counter++;
  }
}
console.log("average" + " ", sum / counter);
