function opinionSlider() {
    var swiper = new Swiper('.opinions .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        speed: 300,
        navigation: {
            nextEl: '.opinions .swiper-button-next',
            prevEl: '.opinions .swiper-button-prev',
        },
        breakpoints: {
            320: {
                spaceBetween: 15
            },
            992: {
                spaceBetween: 30
            },
        }
    })
    swiper.on('slideChange', function () {
        swiper.update();
    });
}

function videoSlider() {
    var swiper = new Swiper('.video .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 15,
        breakpoints: {
            320: {
                spaceBetween: 15
            },
            576: {
                spaceBetween: 30
            },
        }
    })
}

function podcastSlider() {
    var swiper = new Swiper('.podcast .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 15,
        breakpoints: {
            320: {
                spaceBetween: 15
            },
            576: {
                spaceBetween: 30
            },
        }
    })
}

opinionSlider()
videoSlider()
podcastSlider()
