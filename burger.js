function burgermenu() {
  const menu = document.querySelector(".menu")
  const burger = document.querySelector(".burger-menu")
  const open = document.querySelector(".open")
  const close = document.querySelector(".close")

  burger.addEventListener("click", toggleMenu)
  function toggleMenu() {
    if (menu.classList.contains("expanded")) {
      menu.classList.remove("expanded")
      close.style.display = "none"
      open.style.display = "block"
    } else {
      menu.classList.add("expanded")
      close.style.display = "block"
      open.style.display = "none"
    }
  }

  const menuLinks = document.querySelectorAll(".menu-link")
  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  })
}

document.addEventListener("DOMContentLoaded", burgermenu)
