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

// ===== TESTIMONIAL CAROUSEL =====
(function () {
  const carousel = document.querySelector('.testimonial-carousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.testimonial-carousel__slide'));
  const dotsContainer = carousel.querySelector('.testimonial-carousel__dots');
  const btnPrev = carousel.querySelector('.testimonial-carousel__btn--prev');
  const btnNext = carousel.querySelector('.testimonial-carousel__btn--next');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let current = 0;
  let autoTimer = null;
  const INTERVAL = 5000;

  // Build dot buttons
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'testimonial-carousel__dot';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.querySelectorAll('.testimonial-carousel__dot'));

  function showSlide(index) {
    const prev = current;
    current = (index + slides.length) % slides.length;

    // Update slides
    slides.forEach((slide, i) => {
      if (i === current) {
        slide.removeAttribute('hidden');
        // Force reflow so the transition fires when opacity goes 0 → 1
        // eslint-disable-next-line no-unused-expressions
        slide.offsetHeight;
        slide.classList.add('is-active');
      } else {
        slide.classList.remove('is-active');
        if (reducedMotion) {
          slide.setAttribute('hidden', '');
        } else {
          // Wait for fade-out before hiding
          const onEnd = () => {
            slide.setAttribute('hidden', '');
            slide.removeEventListener('transitionend', onEnd);
          };
          slide.addEventListener('transitionend', onEnd);
        }
      }
    });

    // Update dots
    dots.forEach((dot, i) => {
      dot.setAttribute('aria-selected', i === current ? 'true' : 'false');
    });
  }

  function goTo(index) {
    showSlide(index);
  }

  function startAuto() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(() => showSlide(current + 1), INTERVAL);
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  // Initialise first slide
  slides[0].classList.add('is-active');
  slides[0].removeAttribute('hidden');

  // Wire arrow buttons
  btnPrev.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
  btnNext.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });

  // Pause on hover
  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);

  // Keyboard support for arrows
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { stopAuto(); goTo(current - 1); startAuto(); }
    if (e.key === 'ArrowRight') { stopAuto(); goTo(current + 1); startAuto(); }
  });

  // Start auto-advance (skip if reduced motion)
  if (!reducedMotion) {
    startAuto();
  }
})();
