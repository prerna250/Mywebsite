// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add fade-in animation using Animate.css
document.querySelectorAll('.fade-in').forEach(element => {
    element.classList.add('animate__animated', 'animate__fadeIn');
});

// Function to change the color of the heading on mouseover
function changeHeadingColor() {
  var heading = document.querySelector('h1');
  heading.style.color = '#30e3cb';
}

// Function to change the color of the heading back to the original on mouseout
function resetHeadingColor() {
  var heading = document.querySelector('h1');
  heading.style.color = '#66BFBF';
}

// Add event listeners to the heading for mouseover and mouseout events
var heading = document.querySelector('h1');
heading.addEventListener('mouseover', changeHeadingColor);
heading.addEventListener('mouseout', resetHeadingColor);









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
