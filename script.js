(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const byId = (id) => document.getElementById(id);

  const yEl = byId('y');
  if (yEl) yEl.textContent = new Date().getFullYear();

  const btn = byId('menuBtn');
  const menu = byId('menu');
  btn?.addEventListener('click', () => menu?.classList.toggle('open'));

  // Smooth scroll
  const supportsSmooth = 'scrollBehavior' in document.documentElement.style;
  const header = $('.header');
  const getOffset = () => (header ? header.offsetHeight : 0);
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - getOffset();
      supportsSmooth
        ? window.scrollTo({ top, behavior: 'smooth' })
        : window.scrollTo(0, top);
      menu?.classList.remove('open');
    });
  });

  // Typewriter
  const el = byId('typewriter');
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (el && !reduceMotion) {
    const phrases = ['Mechatronics Engineer', 'Software Developer'];
    const typeDelay = 65;
    const eraseDelay = 35;
    const holdAfterType = 1200;
    const holdAfterErase = 400;
    let p = 0, i = 0, typing = true;

    const tick = () => {
      const text = phrases[p];
      if (typing) {
        el.textContent = text.slice(0, ++i);
        if (i === text.length) {
          typing = false;
          return setTimeout(tick, holdAfterType);
        }
        return setTimeout(tick, typeDelay);
      } else {
        el.textContent = text.slice(0, --i);
        if (i === 0) {
          typing = true;
          p = (p + 1) % phrases.length;
          return setTimeout(tick, holdAfterErase);
        }
        return setTimeout(tick, eraseDelay);
      }
    };
    tick();
  }
})();
