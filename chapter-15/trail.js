const amountOfDots = 10;
const dots = [];
for (let i = 0; i < amountOfDots; i++) {
  const dot = document.createElement("div");
  dot.className = "trail";
  document.body.appendChild(dot);
  dots.push(dot);
}


const updateIndex = index => {
if (index >= dots.length) {
  return 0
  } else {
  return index
  }
}

let index = 0;

window.addEventListener("mousemove", event => {
  if (index === dots.length) {
    index = 0;
  }
  showIndex(index)
  const currentDot = dots[index]
  currentDot.style.left = event.pageX + "px";
  currentDot.style.top = event.pageY + "px";
  index++;
});