

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu__btn');
    const menuLinks = document.querySelector('.menu__links');

    menuButton.addEventListener('click', function() {
        if (menuLinks.classList.contains('active')) {
            menuLinks.classList.remove('active');
            menuButton.classList.remove('active');
            menuLinks.style.animation = 'fadeOut 0.5s ease-in-out';
            setTimeout(() => {
                menuLinks.style.display = 'none';
            }, 500);
        } else {
            menuLinks.classList.add('active');
            menuButton.classList.add('active');
            menuLinks.style.display = 'block';
            menuLinks.style.animation = 'fadeIn 0.5s ease-in-out';
        }
    });
});


