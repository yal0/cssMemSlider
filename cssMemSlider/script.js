/* Индекс слайда по умолчанию */
var slideIndex = 0;

const MEM=[
    ["./assets/img/0.png", "Fullstack Developer"],
    ["./assets/img/1.png", "Не смотрите на меня"],
    ["./assets/img/2.png", "Больше костылей"],
    ["./assets/img/3.png", "Fullstack за работой"],
];


function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("dot");
    let text = document.querySelector(".slider-text");
    slideIndex = n;
    // if (n > slides.length) {
    //   slideIndex = 1
    // }
    // if (n < 1) {
    //     slideIndex = slides.length
    // }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
    text.innerHTML=MEM[n][1];
}

showSlide(slideIndex);