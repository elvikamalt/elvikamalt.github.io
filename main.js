const menuBtn = document.querySelector('.menu-btn');
const topMenu = document.querySelector('.top__menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

menuBtn.addEventListener('click', () => {
    topMenu.classList.toggle('show');
});