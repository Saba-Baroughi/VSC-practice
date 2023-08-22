var allProducts = [
  { id: 1, price: 100, name: "mobile" },
  { id: 2, price: 10, name: "mug" },
  { id: 3, price: 1, name: "pen" },
  { id: 4, price: 12, name: "mouse" },
  { id: 5, price: 11, name: "tablet" },
];
var UserBasket = [
  { id: 3, price: 1, name: "pen" },
  { id: 4, price: 12, name: "mouse" },
  { id: 5, price: 11, name: "tablet" },
];
var userProduct = prompt("Enter any items:");
var requestProduct;
var isInShop = allProducts.some(function (products) {
  if (products.name === userProduct) {
    requestProduct = products;
    return true;
  }
});

if (isInShop == true) {
  var newProduct = {
    id: 7,
    name: requestProduct.name,
    price: requestProduct.price,
  };
  UserBasket.push(newProduct);
  var sum = 0;
  UserBasket.forEach(function (products) {
    sum = sum + products.price;
  });
  console.log(UserBasket);
  alert(sum);
} else {
  alert("Run out of the item");
}
