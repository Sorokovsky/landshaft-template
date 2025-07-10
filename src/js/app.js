import { isWebp, enableBurgerMenu } from "./modules/functions.js";
isWebp();
enableBurgerMenu();
import Swiper from "swiper";
import { Autoplay } from 'swiper/modules';
new Swiper('.hero__slider', {
    modules: [Autoplay],
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,

    autoplay: {
        delay: 5000,
    },
});