var province = {
  azar: ["tabriz", "hamadan", "zanjan"],
  tehran: ["tehran", "shomal"],
};
var startProvince = prompt("Enter the first Provience");
var userCities = province[startProvince];
userCities.forEach(function (cities) {
  console.log(cities);
});
