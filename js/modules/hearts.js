'use strict';

(function(){
  const frame = document.querySelector('.hero__photo');
  if (!frame) return;

  const hearts = ['❤️','🧡','💛','💚','💙','💜','🩷','🤍','💖','💗','💓','💝'];
  let interval = null;
  let active = false;

  function spawnHeart() {
    const el = document.createElement('span');
    el.classList.add('hero__heart');
    el.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    const fw = frame.offsetWidth, fh = frame.offsetHeight;
    const ox = fw * 0.3 + Math.random() * fw * 0.4;
    const oy = fh * 0.3 + Math.random() * fh * 0.4;
    el.style.left = ox + 'px';
    el.style.top  = oy + 'px';

    const angle = Math.random() * Math.PI * 2;
    const dist  = 80 + Math.random() * 120;
    el.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    el.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    el.style.setProperty('--rot', (Math.random() * 60 - 30) + 'deg');
    el.style.setProperty('--dur', (0.9 + Math.random() * 0.7) + 's');
    el.style.setProperty('--delay', '0s');
    el.style.fontSize = (16 + Math.random() * 18) + 'px';

    frame.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }

  frame.addEventListener('mouseenter', () => {
    active = true;
    for (let i = 0; i < 6; i++) setTimeout(spawnHeart, i * 80);
    interval = setInterval(() => { if (active) spawnHeart(); }, 220);
  });

  frame.addEventListener('mouseleave', () => {
    active = false;
    clearInterval(interval);
  });
})();
