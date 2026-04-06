'use strict';

(function () {
	const btn = document.querySelector('.contact__hours-burst');
	if (!btn) return;

	const emojis = ['📚', '✏️', '🎓', '⭐', '💡', '🌟', '📝', '🏆', '🎯', '💬', '🌈', '✨'];

	function burst() {
		const rect = btn.getBoundingClientRect();
		const cx = rect.left + rect.width / 2 + window.scrollX;
		const cy = rect.top + rect.height / 2 + window.scrollY;

		for (let i = 0; i < 10; i++) {
			setTimeout(() => {
				const el = document.createElement('span');
				el.className = 'emoji-burst__particle';
				el.textContent = emojis[Math.floor(Math.random() * emojis.length)];

				const angle = Math.random() * Math.PI * 2;
				const dist = 60 + Math.random() * 100;
				el.style.left = cx + 'px';
				el.style.top = cy + 'px';
				el.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
				el.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
				el.style.setProperty('--rot', (Math.random() * 80 - 40) + 'deg');
				el.style.setProperty('--dur', (0.8 + Math.random() * 0.6) + 's');
				el.style.fontSize = (14 + Math.random() * 16) + 'px';

				document.body.appendChild(el);
				el.addEventListener('animationend', () => el.remove());
			}, i * 40);
		}

		btn.style.transform = 'scale(1.4)';
		setTimeout(() => (btn.style.transform = ''), 200);
	}

	btn.addEventListener('click', burst);
})();
