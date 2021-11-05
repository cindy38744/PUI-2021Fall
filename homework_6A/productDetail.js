const yellow = document.getElementById("yellow")
const blue = document.getElementById("blue")
const black = document.getElementById("black")
const grey = document.getElementById("grey")
const foam = document.getElementById("foam")
const feathers = document.getElementById("feathers")
const cotton = document.getElementById("cotton")
const btn = document.querySelector(".btn")
const add = document.getElementById("addition");
const sub = document.getElementById("subtraction");
const qty = document.getElementById("quantityToAdd")
const crt = document.getElementById("cartText");

// boolean array to keep track of color choice
var colorIndexes = ["yellow","blue","black","grey"];
var numColors = colorIndexes.length;
var colorSelection = new Array(numColors).fill(false);
// boolean array to keep track of style choice
var styleIndexes = ["foam","feathers","cotton"];
var numStyles = styleIndexes.length;
var styleSelection = new Array(numStyles).fill(false);
// integer to keep track of quantity
var quantityToAdd = 0;
var cartTotal = 0;

// function that returns the current selected color, if any
function currentColor(){
    for(let i = 0; i < numColors; i++)
        if(colorSelection[i])
            return colorIndexes[i];
    return "none";
}
// function that returns the current selected style, if any
function currentStyle(){
    for(let i = 0; i < numStyles; i++)
        if(styleSelection[i])
            return styleIndexes[i];
    return "none";
}

// function that updates the colorSelection
function selectColor(colorName){
    var colorIndex = colorIndexes.indexOf(colorName);
    colorSelection.fill(false); // resets the selection array
    colorSelection[colorIndex] = true; // selects the new color
}
// function that updates the styleSelection 
function selectStyle(styleName){
    var styleIndex = styleIndexes.indexOf(styleName);
    styleSelection.fill(false); // resets the selection array
    styleSelection[styleIndex] = true; // selects the new style
}

// function that adds a black outline to color selection
function addColorBorder(){
    var colorName = currentColor();
    var blackOutline = "2px solid black";
    switch(colorName){
        case "yellow":
            yellow.style.border = blackOutline;
            break;
        case "blue":
            blue.style.border = blackOutline;
            break;
         case "black":
            black.style.border = "2px solid #c4c4c4";
            break;
         case "grey":
            grey.style.border = blackOutline;
            break;            
    }
}
// function that fills black the style selection
function addStyleBorder(){
    var styleName = currentStyle();
    switch(styleName){
        case "foam":
            foam.style.color = "white";
            foam.style.backgroundColor = "black";
            break;
        case "feathers":
            feathers.style.color = "white";
            feathers.style.backgroundColor = "black";
            break;
         case "cotton":
            cotton.style.color = "white";
            cotton.style.backgroundColor = "black";
            break;
    }
}

// function that removes all borders to color selections
function removeColorBorders()
{
    yellow.style.border = "";
    blue.style.border = "";
    black.style.border = "";
    grey.style.border = "";
}
// function that removes all fills to style selections
function removeStyleBorders()
{
    foam.style.color = "";
    feathers.style.color = "";
    cotton.style.color = "";
    foam.style.backgroundColor = "";
    feathers.style.backgroundColor = "";
    cotton.style.backgroundColor = "";
}

// function that updates the color selection border
function updateColorBorder(){
    removeColorBorders();
    addColorBorder();
}
// function that updates the style selection border
function updateStyleBorder(){
    removeStyleBorders();
    addStyleBorder();
}
// function that updates the quantity value
function updateQuantityValue(){
    qty.textContent = quantityToAdd;
}



// color selection event listeners
yellow.addEventListener('click', () => {
    selectColor("yellow");
    updateColorBorder();
})
blue.addEventListener('click', () => {
    selectColor("blue");
    updateColorBorder();
})
black.addEventListener('click', () => {
    selectColor("black");
    updateColorBorder();
})
grey.addEventListener('click', () => {
    selectColor("grey");
    updateColorBorder();
})

// style selection event listeners
foam.addEventListener('click', () => {
    selectStyle("foam");
    updateStyleBorder();
})
feathers.addEventListener('click', () => {
    selectStyle("feathers");
    updateStyleBorder();
})
cotton.addEventListener('click', () => {
    selectStyle("cotton");
    updateStyleBorder();
})

// quantity event listeners
sub.addEventListener('click', () => {
    if(quantityToAdd > 0)
        quantityToAdd--;
    updateQuantityValue();
})
add.addEventListener('click', () => {
    quantityToAdd++;
    updateQuantityValue();
})


btn.addEventListener("click", function(){
    alert("Added "+quantityToAdd+" to cart!")
    cartTotal += quantityToAdd;
    if(cartTotal > 0)
        crt.textContent = "Shopping Cart ("+cartTotal+")";
})

