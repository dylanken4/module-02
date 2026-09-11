const unitPrice = "12.50";
document.querySelector("form").addEventListener("submit", function(event) {event.preventDefault();
let quantity = document.getElementsByName("quantity")[0].value;
const subtotal = unitPrice * quantity;
const discount = subtotal * 0.05;
const tax = subtotal * 0.07;
const grandTotal = ((subtotal-discount) + tax).toFixed(2);

console.table({unitPrice, quantity, subtotal: subtotal.toFixed(2), discount: discount.toFixed(2), tax: tax.toFixed(2), grandTotal});
});