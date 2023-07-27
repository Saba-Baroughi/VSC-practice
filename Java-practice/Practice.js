function sumValue(num1, num2) {
  if (num1 == undefined) {
    num1 = 1;
  }
  if (num2 == undefined) {
    num2 = 2;
  }
  var result = num1 + num2;
  alert("result" + ":" + result);
}
sumValue(2);
