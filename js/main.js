// Hamburger Button

document.addEventListener("DOMContentLoaded", function () {
    var hamburger = document.querySelector(".biwatt-mobile-hamburger");
    hamburger.addEventListener("click", function () {
        if (hamburger.classList.contains("is-active")) {
            hamburger.classList.remove("is-active");
        } else {
            hamburger.classList.add("is-active");
        }
    });
});

// Hamburger Action

const toggleButton = document.querySelector('.biwatt-mobile-hamburger');
const menu = document.querySelector('.biwatt-mobile-nav');
const body = document.querySelector('body');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('open');
    body.classList.toggle('open');
});

// Swiper
var swiper = new Swiper(".mySwiper", {
    keyboard: {
        enabled: true,
    },
    mousewheel: true,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});