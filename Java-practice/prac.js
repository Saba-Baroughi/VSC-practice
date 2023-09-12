const PI = 3.14;
var radius = prompt("Enter any radius:");
var perimeter = 2 * PI * radius;
console.log("The perimeter is equal to:" + " " + perimeter);
alert("The perimeter is equal to:" + " " + perimeter);

var FirstRandomNumber = Math.random() * 1000;
console.log(FirstRandomNumber);
var finalCaptchaCode = Math.floor(FirstRandomNumber);
console.log("Your captcha number:", finalCaptchaCode);
