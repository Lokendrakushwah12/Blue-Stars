// Loader
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
    loader.classList.add("loader--hidden")
})

// cursor
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");

window.addEventListener("mousemove", (e) => {

    let x = e.pageX;
    let y = e.pageY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            cursor.classList.add("hover");
        })
        link.addEventListener("mouseout", () => {
            cursor.classList.remove("hover");
        })
    })
})
