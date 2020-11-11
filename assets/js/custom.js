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
