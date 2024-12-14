const hamburgerMenu = document.getElementById('hamburger-menu');
const openSearch = document.getElementById('open-search')

const pc_searchbar = document.querySelector(".pc-searchbar")
const nav = document.querySelector("nav")

hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle("active")
})
openSearch.addEventListener('click', () => {
    pc_searchbar.classList.toggle("active")
})
