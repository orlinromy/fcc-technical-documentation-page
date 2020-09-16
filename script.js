const navButton = document.getElementsByClassName("nav-button")[0]
const navLinks = document.getElementsByClassName("nav-links")[0]

navButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})