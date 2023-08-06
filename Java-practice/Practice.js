var userNumber = Number(prompt("Enter The Numnber", 0));
var sum = 0;
for (var i = 0; userNumber / 10 != 0; i++) {
  sum = sum + (userNumber % 10);
  userNumber = Math.floor(userNumber / 10);
}
console.log("Sum of digits:", sum);
