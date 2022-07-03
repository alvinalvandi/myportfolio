//Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Garis Navbar
const garis = document.querySelector('#garis');
const navMenu = document.querySelector('#nav-menu');

garis.addEventListener('click', function(){
    garis.classList.toggle('garis-active');
    navMenu.classList.toggle('hidden');
});