document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const sideMenu = document.querySelector('.side-menu');

    menuIcon.addEventListener('click', function() {
        sideMenu.classList.toggle('active'); // Переключаем класс 'active'
    });
});