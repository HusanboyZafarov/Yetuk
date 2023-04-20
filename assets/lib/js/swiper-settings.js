const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
    }
});


const swiper_achievement_slider = new Swiper('.swiper-achievement', {
    direction: 'horizontal',
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
    },


    slidesPerView: 4,
    spaceBetween: 20,


    navigation: {
        nextEl: '.main-achivement_carousel_first .main-achievement_swiper_button-next',
        prevEl: '.main-achivement_carousel_first .main-achievement_swiper_button-prev',
    },


    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        454: {
            slidesPerView: 2,
        },
        454: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,
        },
    }
});



const swiper_achievement_slider_second = new Swiper('.swiper-achievement_second', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.main-achivement_carousel_second .main-achievement_swiper_button-next',
        prevEl: '.main-achivement_carousel_second .main-achievement_swiper_button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    }
});


const swiper_achievement_slider_third = new Swiper('.swiper-achievement_third', {
    direction: 'horizontal',
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
    },


    slidesPerView: 4,
    spaceBetween: 20,


    navigation: {
        nextEl: '.main-achivement_carousel_third .main-achievement_swiper_button-next',
        prevEl: '.main-achivement_carousel_third .main-achievement_swiper_button-prev',
    },


    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        454: {
            slidesPerView: 2,
        },
        454: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,
        },
    }
});



const swiper_hero = new Swiper('.swiper_hero', {
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    slidesPerView: 1,
    spaceBetween: 20,
});