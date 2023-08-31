var userBasket = [
  { id: 1, name: "labtop", price: 300 },
  { id: 2, name: "phone", price: 250 },
  { id: 3, name: "bed", price: 100 },
  { id: 4, name: "pencil", price: 40 },
  { id: 5, name: "mug", price: 3 },
  { id: 6, name: "table", price: 80 },
];
var filterPrices = userBasket.filter(function (products) {
  return products.price > 100;
});
var sumProducts = 0;
var sumBasket = userBasket.map(function (sumItems) {
  return (sumProducts = sumProducts + sumItems.price);
});
console.log(sumBasket[5]);
var numbersPost = userBasket.length - filterPrices.length;
var post = numbersPost * 2;
var lastPrice = sumBasket[sumBasket.length - 1] + post;
console.log(lastPrice);
