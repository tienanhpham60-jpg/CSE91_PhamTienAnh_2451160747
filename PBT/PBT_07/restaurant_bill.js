const items = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 }
];

const day = "Wednesday";
const useTip = true;

let subtotal = 0;

console.log("========================================");
console.log("           HOA DON NHA HANG");
console.log("========================================");

for (let i = 0; i < items.length; i++) {
    let itemTotal = items[i].price * items[i].quantity;
    subtotal += itemTotal;

    console.log(
        (i + 1) + ". " +
        items[i].name +
        " x" + items[i].quantity +
        " @ " + items[i].price.toLocaleString() +
        " = " + itemTotal.toLocaleString()
    );
}

let discountRate = 0;

if (subtotal > 1000000) {
    discountRate += 15;
} else if (subtotal > 500000) {
    discountRate += 10;
}

if (day === "Wednesday") {
    discountRate += 5;
}

let discount = subtotal * discountRate / 100;

let afterDiscount = subtotal - discount;

let vat = afterDiscount * 0.08;

let tip = useTip ? afterDiscount * 0.05 : 0;

let total = afterDiscount + vat + tip;

console.log("========================================");
console.log("Tong cong:      " + subtotal.toLocaleString() + "đ");
console.log("Giam gia:       " + discount.toLocaleString() + "đ");
console.log("VAT (8%):       " + vat.toLocaleString() + "đ");
console.log("Tip (5%):       " + tip.toLocaleString() + "đ");
console.log("========================================");
console.log("THANH TOAN:     " + total.toLocaleString() + "đ");
console.log("========================================");