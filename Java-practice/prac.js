var ages = [34, 35, 12];
var isAll = ages.every(function (age) {
  return age > 18;
});
console.log(isAll);
