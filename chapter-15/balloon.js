const balloon = document.querySelector("p");
let currentSize = 15; 

const updateSize = size => {
  balloon.style.fontSize = size + "px"
}

window.addEventListener("keydown", event => {
   if (event.key === "ArrowUp") {
    currentSize = currentSize * 1.1;
    if (currentSize > 100) {
      balloon.textContent = "💥";
      document.body.removeEventListener("ArrowDown", window);
    } else {
      updateSize(currentSize);
    }
   } else if (event.key === "ArrowDown") {
    currentSize = currentSize * 0.9;
  	updateSize(currentSize);
   }
});
  