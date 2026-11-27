// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(products, promotionCode) {
  let totalPrice = 0;

  for (let i = 0; i < products.length; i++) {
    let itemTotal = products[i].price * products[i].quantity;
    totalPrice = totalPrice + itemTotal;
  }

  if (promotionCode === "SALE20") {
    let discount = totalPrice * 0.2;
    totalPrice = totalPrice - discount;
  } else if (promotionCode === "SALE50") {
    let discount = totalPrice * 0.5;
    totalPrice = totalPrice - discount;
  }

  return totalPrice;
}

console.log(calculateTotalPrice(products, ""));
console.log(calculateTotalPrice(products, "SALE20"));
console.log(calculateTotalPrice(products, "SALE50"));