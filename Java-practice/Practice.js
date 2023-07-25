let browser = prompt("name any browser:", chrome);
if (browser == "edge") {
  alert("you have got the edge!");
} else if (
  browser == "chrome" ||
  browser == "firefox" ||
  browser == "safari" ||
  browser == "opera"
) {
  alert("okay,we support these browsers, too");
} else {
  alert("we hope that this page looks ok!");
}
