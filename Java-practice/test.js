var allQuestions = [
  { id: 1, title: "2 + 2", answer: "4" },
  { id: 2, title: "2 * 4", answer: "8" },
  { id: 3, title: "7 ** 2", answer: "49" },
  { id: 4, title: "12 / 4", answer: "3" },
  { id: 5, title: "100 / 25", answer: "4" },
  { id: 6, title: "100 * 2", answer: "200" },
  { id: 7, title: "Cpaital Of Iran?", answer: "tehran" },
];
var score = 0;
var mainAnswers = " "; //to avoid write the variable inside the loop, define var outside
allQuestions.forEach(function (question) {
  mainAnswers = prompt(question.title + "?");
  if (mainAnswers === question.answer) {
    score++;
  }
});
console.log(score);
