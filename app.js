const menuIcon = document.querySelector(".menu-icone");
const navLinks = document.querySelector(".barra_navegacao-lista");
const links = document.querySelector(".barra_navegacao-lista li");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle('abrir')
    menuIcon.classList.toggle('abrir')
})