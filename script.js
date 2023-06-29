
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
