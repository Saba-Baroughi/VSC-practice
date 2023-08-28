var allProducts = [
  { id: 1, name: "laptop", price: 17000000 },
  { id: 2, name: "phone", price: 7000000 },
  { id: 3, name: "milk", price: 35000 },
  { id: 4, name: "pen", price: 12000 },
  { id: 5, name: "pencil", price: 9000 },
  { id: 6, name: "cable", price: 55000 },
  { id: 7, name: "water", price: 6000 },
  { id: 8, name: "soft drink", price: 13000 },
];

var userBasket = [
  { id: 1, name: "milk", price: 35000 },
  { id: 2, name: "water", price: 6000 },
];
var userRequest = prompt(
  "If you want add a product enter 1" +
    "\n" +
    "if you want to remove a item enter 2"
);

if (userRequest === "1") {
  var userProductName = prompt("Enter any item");
  var productData;
  var isInShop = allProducts.some(function (product) {
    if (product.name === userProductName) {
      productData = product;
      return true;
    }
  });
  if (isInShop === true) {
    var newProduct = {
      id: 3,
      name: productData.name,
      price: productData.price,
    };
    userBasket.push(newProduct);
    console.log("Basket:", userBasket);
  } else {
    alert("there is not such a item");
  }
} else if (userRequest === "2") {
  var userProductName = prompt("Enter the item");
  var productIndex = userBasket.findIndex(function (product) {
    return (product.name = userProductName);
  });
  userBasket.splice(productIndex, 1);
  console.log("Basket: ", userBasket);
} else {
  alert("Enter the right option(1 or 2)");
}
