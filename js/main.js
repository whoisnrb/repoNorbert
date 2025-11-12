/**
 * Main JavaScript bundle
 * ----------------------
 * The script is organized into small, reusable functions that enhance
 * the declarative HTML components once the DOM is ready. No frameworks,
 * only lean vanilla JS with progressive enhancement in mind.
 */

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

/**
 * Navigation Module
 * Handles hamburger toggle, dropdown menus, and sticky header state.
 */
function initNavigation() {
  const nav = qs('[data-nav]');
  const toggle = qs('[data-nav-toggle]');
  const dropdownToggles = qsa('[data-dropdown-toggle]');

  if (!nav || !toggle) return;

  const toggleNav = () => {
    const isOpen = nav.classList.toggle('nav--open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      nav.querySelector('a, button')?.focus();
    }
  };

  toggle.addEventListener('click', toggleNav);

  // Close nav on escape key when open
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('nav--open')) {
      nav.classList.remove('nav--open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });

  // Close navigation when focus shifts outside on small screens
  nav.addEventListener('click', (event) => {
    if (event.target.matches('[data-nav-link]')) {
      nav.classList.remove('nav--open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  dropdownToggles.forEach((button) => {
    const listItem = button.closest('.nav__item');
    const dropdown = listItem?.querySelector('.nav__dropdown');
    if (!listItem || !dropdown) return;

    button.addEventListener('click', () => {
      const isOpen = listItem.classList.toggle('nav__item--dropdown-open');
      button.setAttribute('aria-expanded', String(isOpen));
    });

    // Close dropdown when focus leaves the menu
    listItem.addEventListener('focusout', (event) => {
      if (!listItem.contains(event.relatedTarget)) {
        listItem.classList.remove('nav__item--dropdown-open');
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/**
 * Slider Module
 * Provides next/prev controls, pagination dots, autoplay (optional),
 * and keyboard navigation for any .slider instance.
 */
function initSliders() {
  const sliders = qsa('.slider');
  sliders.forEach((slider) => {
    const track = qs('[data-slider-track]', slider);
    const slides = qsa('[data-slider-slide]', slider);
    const prevButton = qs('[data-slider-prev]', slider);
    const nextButton = qs('[data-slider-next]', slider);
    const pagination = qs('[data-slider-pagination]', slider);
    const autoplay = slider.dataset.autoplay === 'true';
    const interval = Number(slider.dataset.interval) || 7000;

    if (!track || slides.length === 0) return;
    let index = 0;
    let autoplayTimer;

    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      if (pagination) {
        const dots = qsa('button', pagination);
        dots.forEach((dot, dotIndex) => {
          dot.setAttribute('aria-current', dotIndex === index ? 'true' : 'false');
        });
      }
    };

    const goTo = (newIndex) => {
      index = (newIndex + slides.length) % slides.length;
      update();
    };

    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    nextButton?.addEventListener('click', next);
    prevButton?.addEventListener('click', prev);

    slider.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        next();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prev();
      }
    });

    if (pagination) {
      slides.forEach((_, slideIndex) => {
        const dot = document.createElement('button');
        dot.className = 'slider__dot';
        dot.type = 'button';
        dot.setAttribute('aria-label', `Go to slide ${slideIndex + 1}`);
        dot.addEventListener('click', () => {
          goTo(slideIndex);
        });
        pagination.appendChild(dot);
      });
    }

    if (autoplay) {
      const startAutoplay = () => {
        autoplayTimer = window.setInterval(next, interval);
      };
      const stopAutoplay = () => {
        window.clearInterval(autoplayTimer);
      };

      slider.addEventListener('mouseenter', stopAutoplay);
      slider.addEventListener('focusin', stopAutoplay);
      slider.addEventListener('mouseleave', startAutoplay);
      slider.addEventListener('focusout', (event) => {
        if (!slider.contains(event.relatedTarget)) {
          startAutoplay();
        }
      });

      startAutoplay();
    }

    update();
  });
}

/**
 * Video Play Enhancer
 * Handles play button overlays for inline videos.
 */
function initVideoControls() {
  qsa('[data-video-play]').forEach((button) => {
    const wrapper = button.closest('[data-video-wrapper]');
    const video = wrapper ? qs('video', wrapper) : null;
    if (!video) return;

    const playVideo = () => {
      video.play();
      button.setAttribute('aria-hidden', 'true');
      button.style.display = 'none';
    };

    button.addEventListener('click', playVideo);
  });
}

/**
 * Contact Form Module
 * Performs client-side validation with accessible feedback
 * and a honeypot field for spam protection.
 */
function initContactForm() {
  const form = qs('[data-contact-form]');
  if (!form) return;

  const status = qs('[data-form-status]', form);

  const showStatus = (message, isError = false) => {
    if (!status) return;
    status.textContent = message;
    status.classList.toggle('form__status--error', isError);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();
    const website = formData.get('website')?.toString().trim(); // honeypot field

    const fields = {
      name: qs('[name="name"]', form),
      email: qs('[name="email"]', form),
      message: qs('[name="message"]', form),
    };

    let hasError = false;

    // Honeypot triggered: treat as spam silently
    if (website) {
      showStatus('Something went wrong. Please try again later.', true);
      form.reset();
      return;
    }

    if (!name) {
      fields.name?.classList.add('input--error');
      hasError = true;
    } else {
      fields.name?.classList.remove('input--error');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      fields.email?.classList.add('input--error');
      hasError = true;
    } else {
      fields.email?.classList.remove('input--error');
    }

    if (!message) {
      fields.message?.classList.add('textarea--error');
      hasError = true;
    } else {
      fields.message?.classList.remove('textarea--error');
    }

    if (hasError) {
      showStatus('Please review the highlighted fields.', true);
      return;
    }

    // Simulate successful submission
    window.setTimeout(() => {
      showStatus('Thank you! Your message has been sent.');
      form.reset();
    }, 400);
  });
}

function initCurrentYear() {
  qsa('#year').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

/**
 * Initialize all modules once DOM is ready.
 */
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSliders();
  initVideoControls();
  initContactForm();
  initCurrentYear();
});
