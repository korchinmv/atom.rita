const overlay = document?.querySelector(".overlay");
const productsBtn = document?.querySelector(".header__products-btn");
const productsMenu = document?.querySelector(".products-menu");
const bentoMenu = productsBtn.querySelector(".bento-menu ");
const hamburgerBtn = document?.querySelector(".header__hamburger-menu");
const hamburgerLines = hamburgerBtn.querySelector(".hamburger-lines");
const mobileMenu = document?.querySelector(".mobile-menu");

overlay.addEventListener("click", () => {
  if (overlay.classList.contains("overlay--visible")) {
    overlay.classList.remove("overlay--visible");
    productsMenu.classList.remove("products-menu--active");
    productsBtn.classList.remove("products-btn--active");
    bentoMenu.classList.remove("bento-menu--active");
    mobileMenu.classList.remove("mobile-menu--active");
    hamburgerLines.classList.remove("hamburger-lines--active");
  }
});
