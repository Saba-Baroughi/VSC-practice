let minuets = +prompt("Enter the minuet:");
let seconds = +prompt("Enter the seconds:");
let timer = setInterval(function () {
  if (seconds === -1) {
    minuets--;
    seconds = 59;
  }
  if (minuets === 0 && seconds === 0) {
    clearInterval(timer);
    alert("Timer is done:");
  }
  console.log("Timer:" + minuets + ":" + seconds);
  seconds--;
}, 1000);
