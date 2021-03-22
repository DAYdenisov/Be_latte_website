var menuBurgerContainer = document.querySelector(".menu-burger-container");
var menuBox = document.querySelector(".menu_box");
menuBurgerContainer.onclick = function () {
    menuBurgerContainer.classList.toggle("active");
    menuBox.classList.toggle("active");
};

new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpointsBase: 'container',
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 1,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            spaceBetween: 15,
            centeredSlides: true,
            initialSlide: 1
        },
        1024: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
            initialSlide: 1
        }
    }
});