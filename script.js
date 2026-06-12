const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get('name') || '';
    const contact = data.get('contact') || '';
    const type = data.get('type') || '';
    const message = data.get('message') || '';

    const subject = encodeURIComponent(`New ${type} Project Request`);
    const body = encodeURIComponent(
      `Hello Nova Code Studio,\n\nMy name is ${name}.\nContact: ${contact}\nProject type: ${type}\n\nProject details:\n${message}\n\nThank you.`
    );

    window.location.href = `mailto:hello@novacodestudio.com?subject=${subject}&body=${body}`;
  });
}
