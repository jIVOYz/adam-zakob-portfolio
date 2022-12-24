const menuIcon = document.querySelector('.menu-icon');
const icon = document.querySelector('.icon-menu');
const headerMenu = document.querySelector('.header__menu');
const pcMenu = document.querySelector('.hamb-menu');

document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

    icon.addEventListener('click', () => { // при клике на кнопку
      menuIcon.classList.toggle('menu-open');
      pcMenu.classList.toggle('menu-open'); // открываем/закрываем окно навигации, добаляя/удаляя активный класс
      icon.classList.toggle('menu-open'); // открываем/закрываем окно навигации, добаляя/удаляя активный класс
    })
  
    window.addEventListener('click', e => { // при клике в любом месте окна браузера
      const target = e.target // находим элемент, на котором был клик
      if (!target.closest('.hamb-menu') && !target.closest('.icon-menu')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
        pcMenu.classList.remove('menu-open'); // то закрываем окно навигации, удаляя активный класс
        icon.classList.remove('menu-open'); // то закрываем окно навигации, удаляя активный класс
      }
    })
  })

  var swiper = new Swiper('.swiper', {
    slidesPerView: '1',
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  document.querySelectorAll('textarea').forEach(el => {
    el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
    el.classList.add('auto');
    el.addEventListener('input', e => {
        el.style.height = 'auto';
        el.style.height = (el.scrollHeight) + 'px';
    });
});

// Scroll 

const link = document.querySelector('a');
link.addEventListener("click", function (e) {
  e.preventDefault();
});

const menuAbout = document.querySelectorAll('.menu__link_about');
const menuServices = document.querySelectorAll('.menu__link_services');
const menuPortfolio = document.querySelectorAll('.menu__link_portfolio');
const menuBlog = document.querySelectorAll('.menu__link_blog');

const about = document.querySelector('.about');
const services = document.querySelector('.services');
const portfolio = document.querySelector('.portfolio');
const blog = document.querySelector('.blog');

for (let i = 0; i < menuPortfolio.length; i++) {
  const el = menuPortfolio[i];
  el.addEventListener("click", function (e) {
    portfolio.scrollIntoView(top);
  });
}
for (let i = 0; i < menuBlog.length; i++) {
  const el = menuBlog[i];
  el.addEventListener("click", function (e) {
    blog.scrollIntoView(top);
  });
}
for (let i = 0; i < menuServices.length; i++) {
  const el = menuServices[i];
  el.addEventListener("click", function (e) {
    services.scrollIntoView(top);
  });
}
for (let i = 0; i < menuAbout.length; i++) {
  const el = menuAbout[i];
  el.addEventListener("click", function (e) {
    window.scrollTo(0, 0);
  });
}
