const crt = document.getElementById("cartText");
var cartTotal = 0;

// function that updates cart total text
function updateCartText(){
  if(cartTotal > 0)
      crt.textContent = "Shopping Cart ("+cartTotal+")";
}

function pullFromStorage(){
  for(var i = 0; i < localStorage.length; i++){
    var currentKey = localStorage.key(i);
    var quantity = localStorage.getItem(currentKey);
    cartTotal += parseInt(quantity);
  }
}

pullFromStorage();
updateCartText();
