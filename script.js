// Responsive navigation menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Animate elements on scroll
function animateElements(selector) {
    const elements = document.querySelectorAll(selector);
    const triggerBottom = window.innerHeight * 0.85;
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            element.classList.add('visible');
        }
    });
}

function handleScrollAnimations() {
    animateElements('.feature-card'); // For feature cards
    animateElements('.blog-post'); // For blog posts
    animateElements('.product-card'); // For product cards
    animateElements('.testimonial-card'); // For testimonial cards
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('DOMContentLoaded', handleScrollAnimations);