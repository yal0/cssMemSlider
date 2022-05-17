const MEM=[
    ["./assets/img/0.png", "Fullstack Developer"],
    ["./assets/img/1.png", "Не смотрите на меня"],
    ["./assets/img/2.png", "Больше костылей"],
    ["./assets/img/3.png", "Fullstack за работой"],
];

// кнопки управления
let sliderDots = document.querySelector(".slider-dots");

function showSlide(n) {
    let i;
    let sliderImage = document.querySelector(".slider").children[0];
    let text = document.querySelector(".slider-text");
    let dots = document.getElementsByClassName("dot");

    let imgAnimation="zoomOut";
    let textAnimation="bounceInRight";

    text.classList.add("animated");
    sliderImage.classList.add("animated");
    text.classList.add(textAnimation);
    sliderImage.classList.add(imgAnimation);

    text.addEventListener('animationend', function (e) {
        text.classList.remove("animated");
        text.classList.remove(textAnimation);
    });

    sliderImage.addEventListener('animationend', function (e) {
        sliderImage.classList.remove("animated");
        sliderImage.classList.remove(imgAnimation);
    });

    sliderImage.src=MEM[n][0];
    text.innerHTML=MEM[n][1];

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[n].classList.add("active");
}

sliderDots.addEventListener('click', function (e) {
    // event.currentTarget это ul 
    // event.target это li или span
    let li;
    li = ( e.target.tagName === "LI" ) ? e.target : e.target.parentNode;
    showSlide([...e.currentTarget.children].indexOf(li));
});

showSlide(0);

