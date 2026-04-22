const nav = document.getElementById('nav');
if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));

const burger = document.getElementById('burger');
const mob = document.getElementById('mobileMenu');
if (burger && mob) {
  burger.addEventListener('click', () => {
    const open = mob.classList.toggle('open');
    const [a,b,c] = burger.querySelectorAll('span');
    a.style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
    b.style.opacity = open ? '0' : '1';
    c.style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
  });
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mob.classList.remove('open');
    burger.querySelectorAll('span').forEach(s => { s.style.transform=''; s.style.opacity='1'; });
  }));
}

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const d = parseInt(e.target.dataset.delay || 0);
      setTimeout(() => e.target.classList.add('visible'), d * 100);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.case-card, .why-card, .problem-item, .svc-item, .sector-point, .tl-item, .qual-row, .engagement, .cred').forEach((el, i) => {
  el.classList.add('reveal');
  el.dataset.delay = i % 5;
  obs.observe(el);
});

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = "Message sent — we'll be in touch within 1 business day";
    btn.disabled = true;
    btn.style.cssText = 'width:100%;justify-content:center;font-size:.9rem;padding:15px;background:#2E7D5E;border-color:#2E7D5E;color:#fff;opacity:1;cursor:default;';
  });
}
