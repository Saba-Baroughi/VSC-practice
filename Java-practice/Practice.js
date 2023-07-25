let age = prompt("How old are you?");
let gender = prompt("Which gender are you?", "male or female");
if (age < 18 || gender === "female") {
  alert("you are not allowed to enter");
} else {
  alert("Enter the panel");
}
