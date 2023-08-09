// Loader
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
    loader.classList.add("loader--hidden")
})

// cursor
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");

window.addEventListener("mousemove", (e) => {

    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            cursor.classList.add("hover");
        })
        link.addEventListener("mouseout", () => {
            cursor.classList.remove("hover");
        })
    })
})
