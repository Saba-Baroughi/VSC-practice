var userFirst = Number(prompt("enter first number"));
var userSecond = Number(prompt("enter second number"));
var power = 1;
for (var i = 0; i < userSecond; i++) {
  power = power * userFirst;
}
alert("Power:" + power);
