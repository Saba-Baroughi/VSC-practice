let age = prompt("how old are you?");

let welcome =
  age < 18
    ? function () {
        alert("hello");
      }
    : function () {
        alert("greetings");
      };
welcome();
