import { jarallax } from 'jarallax';



function jarallaxjs() {
    jarallax(document.querySelector('.header__body'), {
        speed: 0.2,
    });
    
    jarallax(document.querySelector('.reviews'), {
        speed: 0.2,
    });
}

export default jarallaxjs