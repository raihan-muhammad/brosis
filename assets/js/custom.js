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

var slider = document.getElementById('slider'),
  sliderItems = document.getElementById('items'),
  prev = document.getElementById('prev'),
  next = document.getElementById('next');

slide(slider, sliderItems, prev, next);

function slide(wrapper, items, prev, next) {
  var posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    slides = items.getElementsByClassName('slide'),
    slidesLength = slides.length,
    slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true),
    index = 0,
    allowShift = true;

  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add('loaded');

  // Mouse and Touch events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);

  // Click events
  // prev.addEventListener('click', function () {
  //   shiftSlide(-1);
  // });
  // next.addEventListener('click', function () {
  //   shiftSlide(1);
  // });

  // Transition events
  items.addEventListener('transitionend', checkIndex);

  function dragStart(e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;

    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction(e) {
    e = e || window.event;

    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = items.offsetLeft - posX2 + 'px';
  }

  function dragEnd(e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.left = posInitial + 'px';
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

  function shiftSlide(dir, action) {
    items.classList.add('shifting');

    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft;
      }

      if (dir == 1) {
        items.style.left = posInitial - slideSize + 'px';
        index++;
      } else if (dir == -1) {
        items.style.left = posInitial + slideSize + 'px';
        index--;
      }
    }

    allowShift = false;
  }

  function checkIndex() {
    items.classList.remove('shifting');

    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + 'px';
      index = slidesLength - 1;
    }

    if (index == slidesLength) {
      items.style.left = -(1 * slideSize) + 'px';
      index = 0;
    }

    allowShift = true;
  }
}

// Swipper Instance

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  loop: true,
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

var swiper2 = new Swiper('.swiper-container-vibes', {
  slidesPerView: 6,
  spaceBetween: 5,
  freeMode: true,
  loop: true,
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
