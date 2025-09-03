let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

// Scroll events
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => link.classList.remove('active'));
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close navbar on scroll (mobile)
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top'});

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});

ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});

ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['Data Scientist', 'ML Engineer', 'AI Engineer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

