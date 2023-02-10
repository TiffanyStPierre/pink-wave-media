/* Mobile Menu & Hamburger */

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.navbar-link');
const topButton = document.querySelector('.back-to-top');

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

/*  Scroll to top button functionality  */

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}  