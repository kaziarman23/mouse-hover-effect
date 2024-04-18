const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", function (event) {
    const posX = event.offsetX;    // this will trace the mouse movement in x direction
    const posY = event.offsetY;   // this will trace the mouse movement in y direction

    const spanEl = document.createElement("span");
    spanEl.style.left = posX + "px";
    spanEl.style.top = posY + "px";

    const sizeEl = Math.random() * 100;
    spanEl.style.width = sizeEl + "px";
    spanEl.style.height = sizeEl + "px";
    
    bodyEl.appendChild(spanEl);

    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});
