document.querySelector('.header__burger-button').addEventListener('click', (event) => {
    const list = event.target.closest('.header__burger-button').previousElementSibling
    list.classList.toggle('header__links-list-display')
})