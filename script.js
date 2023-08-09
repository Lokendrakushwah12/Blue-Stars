// Loader
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
    loader.classList.add("loader--hidden")
})

// cursor
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");

window.addEventListener("mousedown", () => {
    console.log(10);
    cursor.classList.add("clicks");
})

window.addEventListener("mouseup", () => {
    console.log(10);
    cursor.classList.remove("clicks");
})

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
