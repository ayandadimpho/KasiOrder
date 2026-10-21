console.log("KasiOrder is ready!");
const kotaButton = document.getElementById("add-kota");
const chipsButton = document.getElementById("add-chips");
const kotaOrderMessage = document.getElementById("kota-order-message");
const chipsOrderMessage = document.getElementById("chips-order-message");
const kotaCountDisplay = document.getElementById("kota-count");
const chipsCountDisplay = document.getElementById("chips-count");
const kotaSubtotalDisplay = document.getElementById("kota-subtotal");
const chipsSubtotalDisplay = document.getElementById("chips-subtotal");
const totalDueDisplay = document.getElementById("total-due");
let kotaPrice = 35;
let chipsPrice = 15;
let kotaQuantity = 0;
let chipsQuantity = 0;
console.log(kotaButton)

kotaButton.addEventListener("click", function () {
    console.log("Kota added to order!");
    kotaOrderMessage.textContent = "Kota added to order!";
    kotaQuantity += 1;
    let kotaSubtotal  = kotaPrice * kotaQuantity;
    console.log(kotaSubtotal);
    console.log(kotaQuantity);
    kotaCountDisplay.textContent = "Kotas added: " + kotaQuantity;
    kotaSubtotalDisplay.textContent = "Kotas subtotal: " + "R" +kotaSubtotal.toFixed(2);
    updateTotal();
});

chipsButton.addEventListener("click", function () {
    console.log("Chips added to order!");
    chipsOrderMessage.textContent = "Chips added to order!";
    chipsQuantity += 1;
    let chipsSubtotal = chipsPrice * chipsQuantity;
    console.log(chipsSubtotal);
    console.log(chipsQuantity);
    chipsCountDisplay.textContent = "Chips added: " + chipsQuantity;
    chipsSubtotalDisplay.textContent = "Chips subtotal: " + "R" + chipsSubtotal.toFixed(2);
    updateTotal();

})

function updateTotal() {
    let kotaSubtotal  = kotaPrice * kotaQuantity;
    let chipsSubtotal = chipsPrice * chipsQuantity;
    let totalDue = kotaSubtotal + chipsSubtotal;
    totalDueDisplay.textContent = "Order total: " + "R" + totalDue.toFixed(2);
}
