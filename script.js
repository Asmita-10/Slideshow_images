const slides = document.querySelectorAll('.slide');
let idx = 0;
slides.forEach((ele, index) => {
    if (index !== 0) {
        ele.style.visibility = "hidden";
    }
})
let id = setInterval(() => {
    slides[idx].style.visibility = "hidden";
    idx = (idx + 1) % slides.length;
    slides[idx].style.visibility = "visible";
}, 1000);