const button = document.querySelector('.button-burger')
const nav = document.querySelector('.navbar-1')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})