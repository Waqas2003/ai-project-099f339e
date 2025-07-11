// Add event listener to navigation links
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add animation to hero section
document.querySelector('.hero').addEventListener('scroll', event => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.transform = `translateY(${event.target.scrollTop}px)`;
});