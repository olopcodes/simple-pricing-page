const navOpenButton = document.querySelector('.navButton');
const navCloseButton = document.querySelector('.navCloseButton')
const mobileModal = document.querySelector('.mobileNav__modal');


navOpenButton.addEventListener('click', showMenu);
navCloseButton.addEventListener('click', hideMenu);
function showMenu () {
    mobileModal.classList.remove('hide');
}

function hideMenu () {
    mobileModal.classList.add('hide');
}
