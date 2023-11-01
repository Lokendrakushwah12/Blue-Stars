// Loader
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
    loader.classList.add("loader--hidden")
})


// Show and hide cursor
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const body = document.querySelector("body");

body.addEventListener("mouseleave", function () {
    cursor.classList.add("mouse-hidden");
})
body.addEventListener("mouseenter", function () {
    cursor.classList.remove("mouse-hidden");
})


// cursor
window.addEventListener("mousedown", () => {
    cursor.classList.add("clicks");
})

window.addEventListener("mouseup", () => {
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


// $(window).ready(function(){

//   let mouseX = 0;
//   let mouseY = 0;
//   let xp = 0;
//   let yp = 0;

//   $(document).mousemove(function(e){
//     $(".custom__cursor__inner").css({
//       transform: 'translate(' + (e.clientX - 3.25) + 'px, ' + (e.clientY - 3.25) + 'px)'
//     });

//     mouseX = e.clientX - 10;
//     mouseY = e.clientY - 10;
//   });

//   setInterval(function(){
//     xp += ((mouseX - xp)/6);
//     yp += ((mouseY - yp)/6);
//     $(".custom__cursor__outer").css({transform: 'translateX('+ (xp - 15) +'px) translateY('+ (yp - 15) +'px)'} );
//   }, 10);
// })

