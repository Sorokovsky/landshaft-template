import { isWebp, enableBurgerMenu } from "./modules/functions.js";
isWebp();
enableBurgerMenu();
import Swiper from "swiper";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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