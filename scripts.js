/* Mobile Menu & Hamburger */

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.navbar-link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    document.body.classList.toggle('no-scroll');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        document.body.classList.toggle('no-scroll');
    })
});