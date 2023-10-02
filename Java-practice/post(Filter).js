var userBasket = [
  { id: 1, name: "laptop", price: 5000000 },
  { id: 2, name: "phone", price: 3000000 },
  { id: 3, name: "milk", price: 35000 },
  { id: 4, name: "water", price: 6000 },
  { id: 5, name: "coolpad", price: 400000 },
  { id: 6, name: "pencil", price: 9000 },
];
let filteredProducts = userBasket.filter(function (product) {
  return product.price < 100000;
});
let postCost = filteredProducts.length * 1000;
let sum = 0;
userBasket.forEach(function (product) {
  sum += product.price;
});
let totalPrice = sum + postCost;
console.log(totalPrice);
