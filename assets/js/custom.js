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
  slidesPerView: 5,
  spaceBetween: 40,
  breakpoints: {
    285: {
      slidesPerView: 2,
      spaceBetween: 40,
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
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper('.swiper-container-testi', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  loop: true,
  breakpoints: {
    285: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
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

var swiper2 = new Swiper('.swiper-container-vibes', {
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


// bantuan

const tanya_1 = document.getElementById('tanya-1');
const text_tanya_1 = document.getElementById('text-tanya-1');
const buka_1 = document.getElementById('collapseOne');

const tanya_2 = document.getElementById('tanya-2');
const text_tanya_2 = document.getElementById('text-tanya-2');
const buka_2 = document.getElementById('collapseTwo')

const tanya_3 = document.getElementById('tanya-3');
const text_tanya_3 = document.getElementById('text-tanya-3');
const buka_3 = document.getElementById('collapseThree')

const tanya_4 = document.getElementById('tanya-4');
const text_tanya_4 = document.getElementById('text-tanya-4');
const buka_4 = document.getElementById('collapseFour')

const tanya_5 = document.getElementById('tanya-5');
const text_tanya_5 = document.getElementById('text-tanya-5');
const buka_5 = document.getElementById('collapseFive')

tanya_1.addEventListener('click', () => {
  if (buka_1.classList == "collapse show") {
    text_tanya_1.classList.remove('active')
  } else {
    text_tanya_1.classList.add('active')
    text_tanya_2.classList.remove('active')
    text_tanya_3.classList.remove('active')
    text_tanya_4.classList.remove('active')
    text_tanya_5.classList.remove('active')
  }
  return
})

tanya_2.addEventListener('click', () => {
  if (buka_2.classList == "collapse show") {
    text_tanya_2.classList.remove('active')
  } else {
    text_tanya_2.classList.add('active')
    text_tanya_1.classList.remove('active')
    text_tanya_3.classList.remove('active')
    text_tanya_4.classList.remove('active')
    text_tanya_5.classList.remove('active')
  }
  return
})

tanya_3.addEventListener('click', () => {
  if (buka_3.classList == "collapse show") {
    text_tanya_3.classList.remove('active')
  } else {
    text_tanya_3.classList.add('active')
    text_tanya_1.classList.remove('active')
    text_tanya_2.classList.remove('active')
    text_tanya_4.classList.remove('active')
    text_tanya_5.classList.remove('active')
  }
  return
})

tanya_4.addEventListener('click', () => {
  if (buka_4.classList == "collapse show") {
    text_tanya_4.classList.remove('active')
  } else {
    text_tanya_4.classList.add('active')
    text_tanya_1.classList.remove('active')
    text_tanya_2.classList.remove('active')
    text_tanya_3.classList.remove('active')
    text_tanya_5.classList.remove('active')
  }
  return
})

tanya_5.addEventListener('click', () => {
  if (buka_5.classList == "collapse show") {
    text_tanya_5.classList.remove('active')
  } else {
    text_tanya_5.classList.add('active')
    text_tanya_1.classList.remove('active')
    text_tanya_2.classList.remove('active')
    text_tanya_3.classList.remove('active')
    text_tanya_4.classList.remove('active')
  }
  return
})




