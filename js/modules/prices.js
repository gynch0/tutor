'use strict';

function switchFormat(format, btn) {
  document.querySelectorAll('.prices__toggle').forEach(b => {
    b.classList.remove('prices__toggle--active');
    b.setAttribute('aria-pressed', 'false');
  });
  btn.classList.add('prices__toggle--active');
  btn.setAttribute('aria-pressed', 'true');
  document.getElementById('prices__panel--online').style.display = format === 'online' ? 'grid' : 'none';
  document.getElementById('prices__panel--home').style.display   = format === 'home'   ? 'grid' : 'none';
}

document.querySelectorAll('.prices__toggle[data-format]').forEach(btn => {
  btn.addEventListener('click', () => switchFormat(btn.dataset.format, btn));
});
