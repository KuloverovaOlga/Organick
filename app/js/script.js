// import "@babel/polyfill"

import jarallaxjs from './modules/jarallax';
import cards from './modules/cards';
import scroll from './modules/scroll';
import burgerMeny from './modules/burger';

window.addEventListener('DOMContentLoaded', () => {
    jarallaxjs();
    cards('.products__cards1', 6);
    cards('.products__cards2', 3);
    scroll();
    burgerMeny();
});
