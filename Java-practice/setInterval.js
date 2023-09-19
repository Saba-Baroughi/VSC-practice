let i = 10;
var timer = setInterval(function () {
  if (i === 0) {
    clearInterval(timer);
    alert("game over");
  }
  console.log(i);
  i--;
}, 1000);
