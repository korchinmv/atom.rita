const productsBtn = document?.querySelector(".header__products-btn");
const productsMenu = document?.querySelector(".products-menu");
const bentoMenu = productsBtn.querySelector(".bento-menu ");
const overlay = document?.querySelector(".overlay");
const page = document?.querySelector(".page");

if (productsBtn) {
  productsBtn.addEventListener("click", () => {
    productsMenu.classList.toggle("products-menu--active");
    productsBtn.classList.toggle("products-btn--active");
    bentoMenu.classList.toggle("bento-menu--active");
    page.classList.toggle("page--no-scroll");

    if (productsMenu.classList.contains("products-menu--active")) {
      overlay.classList.add("overlay--visible");
    } else {
      overlay.classList.remove("overlay--visible");
    }
  });
}
