const yellow = document.getElementById("yellow")
const blue = document.getElementById("blue")
const black = document.getElementById("black")
const grey = document.getElementById("grey")
const foam = document.getElementById("foam")
const feathers = document.getElementById("feathers")
const cotton = document.getElementById("cotton")
const btn = document.querySelector(".btn")

yellow.addEventListener('click', () => {
    yellow.style.border = "2px solid black";
})

blue.addEventListener('click', () => {
    blue.style.border = "2px solid black";
})

black.addEventListener('click', () => {
    black.style.border = "2px solid #c4c4c4";
})

grey.addEventListener('click', () => {
    grey.style.border = "2px solid black";
})

foam.addEventListener('click', () => {
    foam.style.color = "white";
    foam.style.backgroundColor = "black";
})

feathers.addEventListener('click', () => {
    feathers.style.color = "white";
    feathers.style.backgroundColor = "black";
})

cotton.addEventListener('click', () => {
    cotton.style.color = "white";
    cotton.style.backgroundColor = "black";
})

btn.addEventListener("click", function(){
    alert("Add to Cart!")
})

