document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.getElementById('navLinks');
  const menuBtn = document.getElementById('menuBtn');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // Reveal elements on scroll
  const animatedItems = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px' });

    animatedItems.forEach(el => observer.observe(el));
  } else {
    animatedItems.forEach(el => el.classList.add('is-visible'));
  }

  // Start gentle floating on hero cards
  document.querySelectorAll('.paper-card.one').forEach(el => el.classList.add('float-1'));
  document.querySelectorAll('.paper-card.two').forEach(el => el.classList.add('float-2'));
  document.querySelectorAll('.paper-card.three').forEach(el => el.classList.add('float-3'));
});
