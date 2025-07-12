import { isWebp, enableBurgerMenu, enableMenuScrollings, enableScrollingAnimations } from "./modules/functions.js";
import Swiper from "swiper";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

isWebp();
enableBurgerMenu();
enableMenuScrollings();
enableScrollingAnimations();

new Swiper('.hero__slider', {
    modules: [Autoplay],
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,

    autoplay: {
        delay: 2000,
    },
});

new Swiper('.geogrid__slider', {
    modules: [Autoplay, Pagination, Navigation],
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.geogrid__pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.geogrid__button-next',
        prevEl: '.geogrid__button-prev',
    },
});

new Swiper('.services__slider', {
    modules: [Autoplay, Pagination, Navigation],
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.services__pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.services__next',
        prevEl: '.services__prev',
    },
});

new Swiper('.gallery__slider', {
    modules: [Autoplay, Pagination, Navigation],
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.gallery__pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },
});