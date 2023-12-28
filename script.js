document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    nav.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            nav.classList.remove('show');
        }
    });
});
