let list

document.querySelector('.header__burger-button').addEventListener('click', (event) => {
    list = event.target.closest('.header__burger-button').previousElementSibling
    list.classList.toggle('header__links-list-display')
})

document.querySelector('.header__nav').addEventListener('click', (event) => {
    console.log(event.target.parentElement.classList)
    if (event.target.parentElement.classList.contains('header__link')) {
        console.log('Нашла')
        list.classList.toggle('header__links-list-display')
    }
    
})