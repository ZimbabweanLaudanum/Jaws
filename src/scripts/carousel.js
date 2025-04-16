const track = document.getElementById('track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

items.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = (index + items.length) % items.length;
    updateCarousel();
}

prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

window.addEventListener('resize', () => {
    track.style.transition = 'none';
    updateCarousel();
    setTimeout(() => track.style.transition = '');
});