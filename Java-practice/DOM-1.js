const spaceInvader = "👾";

const abductedHTMLinnerText = document.getElementById("abductMe").textContent;
console.log(abductedHTMLinnerText);
document.getElementById("returnMeToPlanetHTML").textContent =
  abductedHTMLinnerText;

const outerMessage = "Greetings DOM, 👽 we have landed! 👾🛸👾";
document.getElementById("invadeThisSpace").textContent = outerMessage;

let result = "";
for (let i = 0; i < 1000000; i++) {
  result += spaceInvader + "";
}

document.getElementById("alsoInvadeThisSpace").textContent = result;
