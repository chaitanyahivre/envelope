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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

  // Start gentle floating on hero cards
  document.querySelectorAll('.paper-card.one').forEach(el => el.classList.add('float-1'));
  document.querySelectorAll('.paper-card.two').forEach(el => el.classList.add('float-2'));
  document.querySelectorAll('.paper-card.three').forEach(el => el.classList.add('float-3'));
});
