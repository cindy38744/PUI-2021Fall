var itemOverlay = document.getElementsByClassName("item-overlay");


for (var i = 0; i < itemOverlay.length; i++) {
    itemOverlay[i].addEventListener
    ("mouseenter", function( event ) {
            // highlight the mouseenter target
            event.target.style.color = "white";
            event.target.style.backgroundColor = "rgba(0,0,0,0.6)";
          
        });
}

for (var i = 0; i < itemOverlay.length; i++) {
    itemOverlay[i].addEventListener
    ("mouseleave", function( event ) {
            // highlight the mouseenter target
            event.target.style.color = "transparent";
            event.target.style.backgroundColor = "transparent";
          
        });
}



//let itemOverlay = document. querySelectorAll('#item-overlay')


// // This handler will be executed only once when the cursor
// // moves over the unordered list
// itemOverlay.addEventListener("mouseenter", function( event ) {
//     // highlight the mouseenter target
//     event.target.style.color = "white";
//     event.target.style.backgroundColor = "rgba(0,0,0,0.6)";
  
// });

// itemOverlay.addEventListener("mouseleave", function( event ) {
//     // highlight the mouseenter target
//     event.target.style.color = "transparent";
//     event.target.style.backgroundColor = "transparent";
  
// });
    
    
