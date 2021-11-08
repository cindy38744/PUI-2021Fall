const ttl1 = document.getElementById("total1");
const ttl2 = document.getElementById("total2");
const ttl3 = document.getElementById("total3");
const sub1 = document.getElementById("sub1");
const sub2 = document.getElementById("sub2");
const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");
const des2 = document.getElementById("description2");
const clr1 = document.getElementById("clearButton");

var total1 = 0;
var total2 = 0;
var cart = [];


// function that updates the quantity value
function updateQuantityValue(){
  ttl1.textContent = total1;
  ttl2.textContent = total2;
  localStorage.setItem("total1",total1);
  ttl3.textContent = "Total: $"+(total1 * 39.98 + total2 * 39.99).toFixed(2);
}

function pullFromStorage(){
  des2.textContent = "Levtex Home Collection";
  for(var i = 0; i < localStorage.length; i++){
      var currentKey = localStorage.key(i);
      if(currentKey != "total1"){
      var currentKeyArray = currentKey.split("_");
      var color = currentKeyArray[0];
      var material = currentKeyArray[1];
      var quantity = localStorage.getItem(currentKey);
      if (i == 0)
        des2.textContent+=":"
      des2.textContent += ("("+color+"/"+material+") ");
      total2 += parseInt(quantity);
    }
    else{
      total1 = parseInt(localStorage.getItem(currentKey));
    }
  }
}

// quantity event listeners
sub1.addEventListener('click', () => {
  if(total1 > 0)
      total1--;
  updateQuantityValue();
})
sub2.addEventListener('click', () => {
  if(total2 > 0){
    total2--;
    var i = localStorage.length - 1;
    var lastKey = localStorage.key(i);
    while(lastKey == "total1" && i >= 0){
      i--;
      lastKey = localStorage.key(i);
    }
    var lastValue = parseInt(localStorage.getItem(lastKey));
    lastValue--;
    if(lastValue > 0)
      localStorage.setItem(lastKey,lastValue);
    else
      localStorage.removeItem(lastKey);
    updateQuantityValue();
  }
})
add1.addEventListener('click', () => {
  total1++;
  updateQuantityValue();
})
add2.addEventListener('click', () => {
  total2++;
  var i = localStorage.length - 1;
  var lastKey = localStorage.key(i);
  while(lastKey == "total1" && i >= 0){
    i--;
    lastKey = localStorage.key(i);
  }
  var lastValue = parseInt(localStorage.getItem(lastKey));
  lastValue++;
  localStorage.setItem(lastKey,lastValue);
  updateQuantityValue();
})
clr1.addEventListener('click', () => {
  total1 = 0;
  total2 = 0;
  localStorage.clear();
  pullFromStorage();
  updateQuantityValue();
})

// Initiate shopping cart
pullFromStorage();
updateQuantityValue();
