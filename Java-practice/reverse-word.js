let word = prompt("Enter the word:");
let chaarachterArray = word.split("");
let reverseChara = chaarachterArray.reverse();
let reverseWord = reverseChara.join("");
if (word === reverseWord) {
  alert("fine");
} else {
  alert("no");
}
