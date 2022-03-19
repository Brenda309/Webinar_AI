const menu = document.querySelector('.menu-item-hidden');
const navBar = document.querySelector('.nav-bar');
const humbuger = document.querySelector('.humbuger');
const cancel = document.querySelector('.cancel')
humbuger.addEventListener('click', () => {
    humbuger.style.display = 'none'
    cancel.style.display = 'inline'
    menu.classList.add('menu-item-active')


});

cancel.addEventListener('click', () => {
    menu.classList.remove('menu-item-active')
    cancel.style.display = 'none'
    humbuger.style.display = 'block'
});