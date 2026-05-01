const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    }
  });
});
