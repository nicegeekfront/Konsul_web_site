import mobileNav from './modules/mobile-nav.js';
mobileNav();
import swiper from './modules/swiper.js';
import accordeons from './modules/accordeons.js';
import count from './modules/counter.js';
import form from './modules/form.js';

const header = document.querySelector('.header');

window.onscroll = function showHeader() {
    if(window.scrollY > 200) {
        header.classList.add('header__active');
    } else {
        header.classList.remove('header__active');
    }
};


let btnContainer = document.getElementById("mobile-menu");

let btns = btnContainer.getElementsByClassName("mobile__menu-link");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("mobile__menu-link--active");
    current[0].className = current[0].className.replace(" mobile__menu-link--active", "");
    this.className += " mobile__menu-link--active";
  });
}

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}


