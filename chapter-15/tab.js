function asTabs(node) {
const children = node.children;
const arrayChildren = Object.values(children)
const buttons = arrayChildren.map((childNode) => {
    const buttonContent = childNode.getAttribute("data-tabname");
    const button = document.createElement("button");
    button.textContent = buttonContent;
    button.addEventListener("click", event => {
    arrayChildren.forEach(child => {
        if (child === childNode) {
            childNode.style.display = "block";
        } else {
            child.style.display = "none";
        }
    })
    });
    return button
});
const buttonsDiv = document.createElement("div");
for (let i = 0; i < buttons.length; i++) {
    buttonsDiv.appendChild(buttons[i]);
}
node.prepend(buttonsDiv);
}
asTabs(document.querySelector("tab-panel"));