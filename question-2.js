// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

inventory[0].quantity = 200;
inventory.push({ name: "Orange", price: 20, quantity: 300 },);

//ลืมว่าต้องเอา value ใน key มาบวกกันยังไง
//ต้องหาค่า price*quantity ของแต่ละอันก่อน แล้วนำผลทั้งหมดมารวมกัน

console.log("มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก"+   +"บาท");