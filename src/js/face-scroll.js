(function () {
  'use strict';
  if (document.getElementById('kittyScrollBtn')) return;

  const html = `
  <button id="kittyScrollBtn" class="kitty-btn" aria-label="Volver al inicio" title="Volver al inicio">
    <span class="sr-only">Scroll to top</span>

    <svg class="kitty-svg" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <radialGradient id="halo" cx="50%" cy="45%" r="60%">
          <stop offset="0%"  stop-color="rgba(255,255,255,.7)"/>
          <stop offset="70%" stop-color="rgba(255,255,255,.0)"/>
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="52" fill="url(#halo)"></circle>

      <circle cx="60" cy="60" r="48" class="face-bg"/>

      <g class="ears" stroke-linecap="round" stroke-linejoin="round">
        <path d="M28 30 L44 18 L46 36 Z" class="ear-out"/>
        <path d="M74 36 L76 18 L92 30 Z" class="ear-out"/>
        <path d="M32 30 L44 21 L45 33 Z" class="ear-in"/>
        <path d="M75 33 L76 21 L88 30 Z" class="ear-in"/>
      </g>

      <g class="face" stroke-linecap="round" stroke-linejoin="round">

        <ellipse class="eye eye-l" cx="46" cy="58" rx="5.8" ry="8.2"/>
        <ellipse class="eye eye-r" cx="74" cy="58" rx="5.8" ry="8.2"/>

        <circle class="eye-shine" cx="44.5" cy="55" r="1.6"/>
        <circle class="eye-shine" cx="72.5" cy="55" r="1.6"/>

        <path class="nose" d="M60 64c2.8-4 10 1.5 0 7c-10-5.5-2.8-11 0-7Z"/>

        <path class="mouth" d="M53 72 q7 6 14 0"/>

        <ellipse class="cheek" cx="36" cy="64" rx="6.5" ry="4.5"/>
        <ellipse class="cheek" cx="84" cy="64" rx="6.5" ry="4.5"/>

        <path class="whisker" d="M24 60 h16"/>
        <path class="whisker" d="M26 66 h14"/>
        <path class="whisker" d="M80 60 h16"/>
        <path class="whisker" d="M80 66 h14"/>
      </g>

      <g class="face-wink" stroke-linecap="round" stroke-linejoin="round">
        <path class="eye-wink" d="M40 58 q6 8 12 0"/>
        <ellipse class="eye-open" cx="74" cy="58" rx="5.8" ry="8.2"/>
        <circle class="eye-shine" cx="72.5" cy="55" r="1.6"/>
        <path class="mouth" d="M53 72 q7 8 14 0"/>
      </g>
    </svg>
  </button>
  `;
  document.body.insertAdjacentHTML('beforeend', html);

  const btn = document.getElementById('kittyScrollBtn');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const toggle = () => {
    if (window.scrollY > 240) btn.classList.add('is-visible');
    else btn.classList.remove('is-visible');
  };
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });

  const goTop = () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  btn.addEventListener('click', goTop);
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goTop(); }
  });
})();
