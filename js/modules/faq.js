'use strict';

document.querySelectorAll('.faq__question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq__item');
    const isOpen = item.classList.contains('faq__item--open');
    document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('faq__item--open'));
    if (!isOpen) item.classList.add('faq__item--open');
  });
});
