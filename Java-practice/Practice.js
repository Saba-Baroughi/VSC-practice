var userFirst = Number(prompt("enter first number"));
var userSecond = Number(prompt("enter second number"));
var power = 1;
var i = 0;
while (i < userSecond) {
  power = power * userFirst;
  i++;
}
alert("Power:" + power);
