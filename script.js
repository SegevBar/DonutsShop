let pay = 0;
let toPay = document.getElementById("toPay");

function addToCart(item) {
  const shoppingCart = document.getElementById("shoppingItems");  
  shoppingCart.insertAdjacentHTML("beforeend", "<li>"+ item + "</li>")

  pay += 12;
  toPay.textContent = "לתשלום:  " + pay + " שח";
}