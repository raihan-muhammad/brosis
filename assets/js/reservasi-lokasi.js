function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Tampilkan Semuanya";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Lebih Sedikit";
        moreText.style.display = "inline";
    }
}
// Deklarasi Element

const body = document.getElementById('body');
const btnBurger = document.getElementById('btn-burger');
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

        iconBurger.removeAttribute('class');
        iconBurger.setAttribute('class', 'ri-close-fill');
        textCloseNav.style.display = 'block';
        csBg.style.boxShadow = '0 1px 6px #bfbbbb';
    } else {
        statusBtn = false;
        menuNav.classList.remove('mb-nav-active');
        btnBurger.style.transition = 'all 0.8s ease';
        menuNav.style.backgroundColor = '#fff';

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

        listMenu.style.display = 'none';
        textCloseNav.style.display = 'none';
        iconBurger.removeAttribute('class');
        iconBurger.setAttribute('class', 'ri-menu-fill');
        csBg.style.boxShadow = '0 1px 6px #bfbbbb';
    }
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 5,
    freeMode: true,
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
            slidesPerView: 4,
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
            slidesPerView: 1,
            spaceBetween: 10,
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
            slidesPerView: 3,
            spaceBetween: 0,
        },
    },
});

// gambar lokasi

const big_img = document.getElementById('img-big');
const small_img_1 = document.getElementById('img-small-1');
const small_img_2 = document.getElementById('img-small-2');
const small_img_3 = document.getElementById('img-small-3');
const small_img_4 = document.getElementById('img-small-4');

small_img_1.addEventListener('click', () => {
    big_img.innerHTML = `<img src="assets/img/Image 13.png" class="img-thumbnail float-left" alt="...">`
})