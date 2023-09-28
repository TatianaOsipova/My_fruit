var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    },
    mousewheel: {
        thresholdDelta: 70,
    },
    spaceBetween: 60,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});