document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');

        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Scroll animation for portfolio sections
    const scrollReveal = function () {
        const sections = document.querySelectorAll('.scroll-reveal');

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.85) {
                if (!section.classList.contains('visible')) {
                    section.classList.add('visible');
                }
            }
        });
    };

    scrollReveal();
    window.addEventListener('scroll', scrollReveal);

    // === Footer animation on page load ===
    const footer = document.querySelector('.container-footer');
    if (footer) {
        footer.classList.add('footer-hidden'); // Start hidden

        setTimeout(() => {
            footer.classList.add('footer-visible');
        }, 300); // You can adjust delay if needed
    }
});
