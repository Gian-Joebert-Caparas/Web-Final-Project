document.addEventListener('DOMContentLoaded', function() {
    // Add initial load animations
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelector('.nav-links');
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    // Apply initial load animations
    header.classList.add('fade-in');
    logo.classList.add('slide-in-left', 'stagger-delay-1');
    navLinks.classList.add('slide-in-right', 'stagger-delay-2');
    heroText.classList.add('slide-in-left', 'stagger-delay-3');
    heroImage.classList.add('slide-in-right', 'stagger-delay-4');
    
    // Add scroll animation classes to elements
    const scrollElements = [
        ...document.querySelectorAll('.features h2'),
        ...document.querySelectorAll('.features-description'),
        ...document.querySelectorAll('.feature-item'),
        ...document.querySelectorAll('.features-image'),
        ...document.querySelectorAll('.tools h2'),
        ...document.querySelectorAll('.tool-icon'),
        ...document.querySelectorAll('.portfolio h2'),
        ...document.querySelectorAll('.portfolio p'),
        ...document.querySelectorAll('.slider-container'),
        ...document.querySelectorAll('.footer-left'),
        ...document.querySelectorAll('.footer-right')
    ];
    
    // Add scroll-fade-in class to all elements
    scrollElements.forEach(el => {
        el.classList.add('scroll-fade-in');
    });
    
    // Add staggered delays to feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        const delayClass = `stagger-delay-${(index % 5) + 1}`;
        item.classList.add(delayClass);
    });
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
        );
    }
    
    // Handle scroll animations
    function handleScrollAnimations() {
        scrollElements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('visible');
            }
        });
    }
    
    // Run once to initialize visible elements
    handleScrollAnimations();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScrollAnimations);
});