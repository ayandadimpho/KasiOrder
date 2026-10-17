console.log("KasiOrder is ready!");
const kotaButton = document.getElementById("add-kota");
const orderMessage = document.getElementById("order-message");
const kotaCountDisplay = document.getElementById("kota-count");
const kotaSubtotalDisplay = document.getElementById("kota-subtotal")
let kotaPrice = 35;
let kotaQuantity = 0;
console.log(kotaButton)

kotaButton.addEventListener("click", function () {
    console.log("Kota added to order!");
    orderMessage.textContent = "Kota added to order!";
    kotaQuantity += 1;
    let kotaSubtotal  = kotaPrice * kotaQuantity;
    console.log(kotaSubtotal);
    console.log(kotaQuantity);
    kotaCountDisplay.textContent = "Kotas added: " + kotaQuantity;
    kotaSubtotalDisplay.textContent = "Kotas subtotal: " + "R" +kotaSubtotal.toFixed(2);

});