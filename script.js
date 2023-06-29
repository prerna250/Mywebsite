// Navbar background change on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('nav');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});

// Smooth scrolling
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// Certificate hover effect
const certificationItems = document.querySelectorAll('.certification-item');
certificationItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = '#EAF6F6';
  });

  item.addEventListener('mouseout', () => {
    item.style.backgroundColor = 'transparent';
  });
});

// Certificate click redirect
const certificateLinks = document.querySelectorAll('.certification-item a');
certificateLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.stopPropagation();
    const url = link.getAttribute('href');
    window.open(url, '_blank');
  });
});
