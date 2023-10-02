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

var userRequest = prompt("1. Add Product \n 2. Remove product");

if (userRequest === "1") {
  let userProductName = prompt("Enter your item");
  var productData;
  let isInShop = allProducts.some(function (product) {
    if (product.name === userProductName) {
      productData = product;
      return true;
    }
  });
  if (isInShop === true) {
    let newProduct = {
      id: 3,
      name: productData.name,
      price: productData.price,
    };
    userBasket.push(newProduct);
    console.log(userBasket);
  } else {
    alert("Choose another item");
  }
} else if (userRequest === "2") {
  var userProductName = prompt("Entet the removed item:");
  let productIndex = userBasket.findIndex(function (product) {
    return (product.name = userProductName);
  });
  userBasket.splice(productIndex, 1);
  console.log(userBasket);
} else {
  alert("Enter the proper");
}
