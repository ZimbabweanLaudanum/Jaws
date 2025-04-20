const BURGERBUTT = document.querySelector('.burgerbutt');
const MENU = document.querySelector('.menu');

BURGERBUTT.addEventListener('click', function() {
    this.classList.toggle('active');
    MENU.classList.toggle('open');
    document.body.classList.toggle('noscroll');
});