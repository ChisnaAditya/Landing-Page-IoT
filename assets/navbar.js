const navBtn = document.querySelector('.nav-btn')
const showNavMenu = document.querySelector('.nav-menu-hidden')

navBtn.addEventListener('click', () => {
    showNavMenu.classList.toggle('nav-menu-show')
    navBtn.classList.toggle('nav-btn-clicked')
})