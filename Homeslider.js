
document.addEventListener('DOMContentLoaded', function() {

    const cards = document.querySelectorAll('.slider-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let positions = [
        { scale: 0.8, y: 0, z: 3, opacity: 1, right: '20%' },   // Top card
        { scale: 0.9, y: 40, z: 2, opacity: 1, right: '30%' },  // Middle card
        { scale: 1, y: 80, z: 1, opacity: 1, right: '10%' }     // Bottom card
    ];
    
    let currentIndex = 0;
    const totalCards = cards.length;
    
    updateCards();

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    sliderContainer.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {       
        if (touchEndX < touchStartX - 50) {
            nextSlide();
        } else if (touchEndX > touchStartX + 50) {
            prevSlide(); 
        }
    }
    

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalCards;
        animateCards();
    }
    

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        animateCards();
    }
    

    function animateCards() {
        cards.forEach(card => {
            card.style.transition = 'all 0.6s ease';
        });
        setTimeout(updateCards, 50);
    }
    

    function updateCards() {
        for (let i = 0; i < totalCards; i++) {
            const position = (currentIndex + i) % totalCards;
            const card = cards[i];
            const pos = positions[position];     
            card.style.transform = `scale(${pos.scale}) translateY(${pos.y}px)`;
            card.style.zIndex = pos.z;
            card.style.opacity = pos.opacity;
            card.style.right = pos.right;
        }
    }
    
});