// MOBILE NAVIGATION MENU
const menuButton = document.querySelector('.menu');
const navList = document.querySelector('.nav--list');

menuButton.addEventListener('click', function () {
    navList.classList.toggle('active');
});