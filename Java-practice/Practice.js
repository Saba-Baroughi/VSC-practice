var sum = 0;
for (var n = 0; n < 5; n++) {
  sum = sum + Number(prompt("Enter the" + (n + 1) + "Number"));
}
var average = sum / 5;
alert("the averageis:" + average);
