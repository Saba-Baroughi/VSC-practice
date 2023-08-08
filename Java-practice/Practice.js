var userFirst = Number(prompt("enter first number"));
var userSecond = Number(prompt("enter second number"));
var power = 1;
var i = 0;
do {
  power = power * userFirst;
  i++;
} while (i < userSecond);
alert("Power:" + power);
