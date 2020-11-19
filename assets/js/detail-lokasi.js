// Deklarasi Element

const body = document.getElementById('body');
const btnBurger = document.getElementById('btn-burger');
const bgHeader = document.getElementById('bg-header');
const iconBurger = document.getElementById('icon-burger');
const csBg = document.getElementById('cs-bg');
const menuNav = document.getElementById('mb-menu-nav');
const textCloseNav = document.getElementById('text-close-nav');
const listMenu = document.getElementById('mb-list-menu');

let statusBtn = false;

// Event Listener
btnBurger.addEventListener('click', () => {
    if (statusBtn === false) {
        statusBtn = true;
        menuNav.classList.add('mb-nav-active');
        listMenu.style.display = 'block';
        btnBurger.style.transition = 'all 0.8s ease';
        menuNav.style.backgroundColor = 'rgb(32 32 32 / 67%)';
        bgHeader.style.display = 'none';
        iconBurger.removeAttribute('class');
        iconBurger.setAttribute('class', 'ri-close-fill');
        textCloseNav.style.display = 'block';
        csBg.style.boxShadow = '0 1px 6px #bfbbbb';
    } else {
        statusBtn = false;
        menuNav.classList.remove('mb-nav-active');
        btnBurger.style.transition = 'all 0.8s ease';
        menuNav.style.backgroundColor = '#fff';
        bgHeader.style.display = 'block';
        listMenu.style.display = 'none';
        textCloseNav.style.display = 'none';
        iconBurger.removeAttribute('class');
        iconBurger.setAttribute('class', 'ri-menu-fill');
        csBg.style.boxShadow = '0 1px 6px #bfbbbb';
    }
});

textCloseNav.addEventListener('click', () => {
    if (statusBtn === false) {
        statusBtn = true;
        menuNav.classList.add('mb-nav-active');
        btnBurger.style.transition = 'all 0.8s ease';
        body.style.backgroundColor = 'rgb(32 32 32 / 67%)';
        bgHeader.style.display = 'none';
        listMenu.style.display = 'block';
        textCloseNav.style.display = 'block';

        iconBurger.removeAttribute('class');
        iconBurger.setAttribute('class', 'ri-close-fill');
        csBg.style.boxShadow = '0 1px 6px #bfbbbb';
    } else {
        statusBtn = false;
        menuNav.classList.remove('mb-nav-active');
        btnBurger.style.transition = 'all 0.8s ease';
        body.style.backgroundColor = '#fff';
        bgHeader.style.display = 'block';
        listMenu.style.display = 'none';
        textCloseNav.style.display = 'none';
        iconBurger.removeAttribute('class');
        iconBurger.setAttribute('class', 'ri-menu-fill');
        csBg.style.boxShadow = '0 1px 6px #bfbbbb';
    }
});

// Swipper Instance
var swiper4 = new Swiper('.swiper-container-lokasi', {
    slidesPerView: 4,
    spaceBetween: 5,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        285: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
        1025: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});

var swiper2 = new Swiper('.swiper-container-testi', {
    slidesPerView: 3,
    spaceBetween: 50,
    freeMode: true,
    breakpoints: {
        285: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

var swiper3 = new Swiper('.swiper-container-vibes', {
    slidesPerView: 6,
    spaceBetween: 5,
    freeMode: true,
    breakpoints: {
        285: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1025: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});
