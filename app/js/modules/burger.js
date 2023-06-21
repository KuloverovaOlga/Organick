function burgerMeny() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__nav');
    const body = document.body;
    const overlay = document.querySelector('.overlay');
    const navItems = document.querySelectorAll('.header__nav-item')
    const basket = document.querySelector('.header__basket')
    const imgMin = document.querySelector('.header__logo-img-min')

    setInterval(() => {
        let width = window.innerWidth
        if(width > 480 ) {
            burger.style.left = `${width - 60}px`
            basket.style.left = `${width - 140}px`
            imgMin.style.display = 'none'
        } else {
            burger.style.left = `${width - 60}px`
            basket.style.left = `15px`
            imgMin.style.display = 'block'
            imgMin.style.left = `${width/2 - 30}px`
        }


    }, 0);

 

    function openBurger() {
        body.classList.add('stop-scroll');
        burger.classList.add('burger-active');
        nav.classList.add('header__nav-visible');
        overlay.classList.add('overlay--show');
    }

    function closeBurger() {
        nav.classList.remove('header__nav-visible');
        overlay.classList.remove('overlay--show');
        burger.classList.remove('burger-active');
        body.classList.remove('stop-scroll');
    }

    burger.addEventListener('click', () => {
        burger.classList.contains('burger-active') ? closeBurger() : openBurger()
        });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeBurger()
        }
    })

    navItems.forEach( (navItem)=> {
        navItem.addEventListener('click', () => {
            closeBurger()
        })
    })


}

export default burgerMeny;
