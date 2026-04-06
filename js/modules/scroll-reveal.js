'use strict';

const elements = document.querySelectorAll('.js-reveal');

const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('js-reveal--visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0, rootMargin: '200px 0px 200px 0px' });

elements.forEach(el => obs.observe(el));

// Запасной вариант: показать все скрытые элементы через 600мс
setTimeout(() => {
  elements.forEach(el => el.classList.add('js-reveal--visible'));
}, 600);
