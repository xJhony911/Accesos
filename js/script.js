document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.nav__menu-btn');
    const navList = document.querySelector('.nav__list');

    // Agrega un evento click al botón del menú
    menuButton.addEventListener('click', function () {
        navList.classList.toggle('active'); // Muestra u oculta el menú
        menuButton.classList.toggle('active'); // Cambia el estilo del botón
    });
});
