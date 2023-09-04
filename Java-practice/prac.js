var word = prompt("Enter the word");
var characterArray = word.split("");
var reverseCharacters = characterArray.reverse();
var reverseWord = reverseCharacters.join("");
if (word === reverseWord) {
  alert("they are reverse");
} else {
  alert("it is not ");
}
