const offCanvas = document.querySelector(".offcanvas");
const stickyTop = document.querySelector(".sticky-top");

offCanvas.addEventListener("show.bs.offcanvas", function () {
    stickyTop.style.overflow = "visible";
});

offCanvas.addEventListener("hidden.bs.offcanvas", function () {
    stickyTop.style.overflow = "hidden";
});