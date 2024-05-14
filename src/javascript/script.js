$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const commentCarousel = document.querySelector('.comment-carousel');

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

prevBtn.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = totalSlides - 2;
    } else {
        currentIndex -= 1;
    }
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    if (currentIndex === totalSlides - 2) {
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = currentIndex * (-416); // 384px (largura do slide) + 32px (espaçamento)
    commentCarousel.style.transform = `translateX(${offset}px)`;
}

// function toggleBox(caixa) {
//     caixa.classList.toggle('aberta');
//     const seta = caixa.querySelector('.seta');
//     if (caixa.classList.contains('aberta')) {
//         seta.style.transform = 'rotate(180deg)'; // Rotaciona a seta para cima quando a caixa está aberta
//     } else {
//         seta.style.transform = 'rotate(0deg)'; // Rotaciona a seta para baixo quando a caixa está fechada
//     }
// }

const boxfaq = document.getElementsByClassName('contentbox');
for (i = 0; i<boxfaq.length; i++ ){
    boxfaq[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}