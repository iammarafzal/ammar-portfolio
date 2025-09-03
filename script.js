let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle menu open/close
const toggleMenu = () => {
    menuIcon.classList.toggle('fa-xmark');  // cross
    menuIcon.classList.toggle('fa-bars');   // hamburger
    navbar.classList.toggle('active');
    // update ARIA state for accessibility
    const expanded = navbar.classList.contains('active');
    menuIcon.setAttribute('aria-expanded', expanded ? 'true' : 'false');
};
menuIcon.onclick = toggleMenu;
menuIcon.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
    }
});

// Close navbar when scrolling
window.onscroll = () => {
    let top = window.scrollY;
    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');

    // highlight active section
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => link.classList.remove('active'));
            document
                .querySelector('header nav a[href*=' + id + ']')
                .classList.add('active');
        }
    });

    // close navbar on scroll
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
};

// Close on nav link click (mobile)
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});




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

