'use strict';

(function () {
  const burger    = document.querySelector('.nav__burger');
  const menu      = document.querySelector('.burger-menu');
  const overlay   = document.querySelector('.burger-menu__overlay');
  const closeBtn  = document.querySelector('.burger-menu__close');

  if (!burger || !menu || !overlay) return;

  function openMenu() {
    menu.classList.add('is-open');
    overlay.classList.add('is-open');
    burger.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    menu.removeAttribute('aria-hidden');
    menu.removeAttribute('inert');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    overlay.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    menu.setAttribute('inert', '');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', () => {
    burger.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();
