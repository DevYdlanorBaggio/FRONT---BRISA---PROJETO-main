$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

});

// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// const carousel = document.querySelector('.comment-carousel');

// let slideIndex = 0;

// prevBtn.addEventListener('click', () => {
//     if (slideIndex > 0) {
//         slideIndex--;
//         carousel.style.transform = `translateX(-${slideIndex * 384}px)`;
//     }
// });

// nextBtn.addEventListener('click', () => {
//     const numSlides = document.querySelectorAll('.slide').length;
//     if (slideIndex < numSlides - 1) {
//         slideIndex++;
//         carousel.style.transform = `translateX(-${slideIndex * 384}px)`;
//     }
// });

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const commentCarousel = document.querySelector('.comment-carousel');

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 2) {
        currentIndex += 1;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = currentIndex * (-50); // Calcula o deslocamento necessário para mostrar o próximo slide
    commentCarousel.style.transform = `translateX(${offset}%)`;
}