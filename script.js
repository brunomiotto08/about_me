(function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const handler = () => nav.classList.toggle('nav--scrolled', window.scrollY > 30);
  window.addEventListener('scroll', handler, { passive: true });
  handler();
})();

(function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;
  const toggle = () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };
  hamburger.addEventListener('click', toggle);
  mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
})();

(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
    });
  });
})();

(function initReveal() {
  const els = document.querySelectorAll('.reveal-element');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => observer.observe(el));
})();

(function initTabs() {
  const tabBtns   = document.querySelectorAll('.tabs__btn');
  const tabPanels = document.querySelectorAll('.tabs__panel');
  const indicator = document.getElementById('tabsIndicator');
  if (!tabBtns.length || !indicator) return;

  function moveIndicator(btn) {
    indicator.style.width     = btn.offsetWidth + 'px';
    indicator.style.transform = 'translateX(' + btn.offsetLeft + 'px)';
  }

  function activate(tabId) {
    tabBtns.forEach(btn => {
      const active = btn.dataset.tab === tabId;
      btn.classList.toggle('tabs__btn--active', active);
      btn.setAttribute('aria-selected', active);
      if (active) moveIndicator(btn);
    });
    tabPanels.forEach(p => p.classList.toggle('tabs__panel--active', p.id === 'tab-' + tabId));
  }

  tabBtns.forEach(btn => btn.addEventListener('click', () => activate(btn.dataset.tab)));
  requestAnimationFrame(() => {
    const active = document.querySelector('.tabs__btn--active');
    if (active) moveIndicator(active);
  });
  window.addEventListener('resize', () => {
    const active = document.querySelector('.tabs__btn--active');
    if (active) moveIndicator(active);
  }, { passive: true });
})();

(function initStagger() {
  document.querySelectorAll('.skill-group').forEach(group => {
    group.querySelectorAll('.skill-item').forEach((el, i) => {
      el.style.transitionDelay = (i * 0.04) + 's';
    });
  });
})();

(function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const items    = [...document.querySelectorAll('[data-lightbox]')];
  const imgEl    = document.getElementById('lightboxImg');
  const caption  = document.getElementById('lightboxCaption');
  const prevBtn  = document.getElementById('lightboxPrev');
  const nextBtn  = document.getElementById('lightboxNext');
  if (!items.length || !imgEl || !caption) return;

  let current = 0;

  function show(index) {
    current = (index + items.length) % items.length;
    const item = items[current];
    const thumb = item.querySelector('img');
    if (!thumb) return;
    imgEl.src = thumb.src;
    imgEl.alt = thumb.alt;
    caption.textContent = item.dataset.caption || thumb.alt || '';
  }

  function open(index) {
    show(index);
    lightbox.hidden = false;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.hidden = true;
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    imgEl.src = '';
  }

  items.forEach((item, i) => {
    const trigger = item.querySelector('.project-gallery__trigger');
    if (!trigger) return;
    trigger.addEventListener('click', () => open(i));
  });

  lightbox.querySelectorAll('[data-lightbox-close]').forEach(el => {
    el.addEventListener('click', close);
  });

  if (prevBtn) prevBtn.addEventListener('click', () => show(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => show(current + 1));

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
})();