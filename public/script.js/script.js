const button = document.querySelector('.header__button-burger')
const nav = document.querySelector('.header__navbar-1')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})