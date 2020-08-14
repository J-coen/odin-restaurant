const loadBurger = function() {
    const burger = document.querySelector('.burger-container');
    const body = document.querySelector('body');
    const sideNav = document.querySelector('.side-nav')

    burger.classList.remove('active');
    body.style.overflow = 'auto';

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        burger.classList.contains('active') ? sideNav.style.width = '60%' : sideNav.style.width = '0';
        burger.classList.contains('active') ? body.style.overflow = 'hidden' : body.style.overflow = 'auto';
    })
}

export { loadBurger }