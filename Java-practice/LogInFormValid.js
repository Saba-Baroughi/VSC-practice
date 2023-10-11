let userNameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let modal = document.querySelector(".modal");

function dataValidation() {
  let userNameValue = userNameInput.value;
  let passwordValue = passwordInput.value;
  if (userNameValue.lenghth < 12 || userNameValue.length < 8) {
    modal.style.display = "inline";
  } else {
    modal.style.background = "green";
    modal.style.display = "inline";
    modal.innerHTML = "Successfully login";
  }
  setTimeout(function () {
    modal.style.display = "none";
  }, 3000);

  console.log(userNameValue, passwordValue);
}
