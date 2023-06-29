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

// Button color change on hover
const contactBtn = document.querySelector('.btn');
contactBtn.addEventListener('mouseover', () => {
  contactBtn.style.backgroundColor = '#30e3cb';
});

contactBtn.addEventListener('mouseout', () => {
  contactBtn.style.backgroundColor = '#11cdd4';
});

// Function to handle hover and click events for certificates
function handleCertificateEvents() {
  const certificates = document.querySelectorAll(".certificate-item");

  certificates.forEach((certificate) => {
    certificate.addEventListener("mouseover", () => {
      const certificateName = certificate.querySelector(".certificate-name");
      certificateName.style.opacity = "1"; // Set opacity to 1 to make the name visible
    });

    certificate.addEventListener("mouseout", () => {
      const certificateName = certificate.querySelector(".certificate-name");
      certificateName.style.opacity = "0"; // Set opacity to 0 to hide the name again
    });

    certificate.addEventListener("click", () => {
      const certificateLink = certificate.getAttribute("data-link");
      window.open(certificateLink, "_blank"); // Open the link in a new tab
    });
  });
}

// Call the function to handle certificate events
handleCertificateEvents();

