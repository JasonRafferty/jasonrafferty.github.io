const WHATSAPP_NUMBER = 'PLACEHOLDER'; // TODO Jason: replace with your number e.g. '447700900000'

// Wire WhatsApp links
document.querySelectorAll('.js-whatsapp').forEach(el => {
  const msg = el.dataset.waMessage || "Hi Jason, I'd like to book a tutoring session.";
  el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
});

// Mobile nav toggle
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav__toggle');
if (nav && toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!isOpen));
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
}

// Close nav when a link is clicked (mobile UX)
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav) nav.setAttribute('data-open', 'false');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
document.querySelectorAll('.js-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Scroll reveal
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
}
