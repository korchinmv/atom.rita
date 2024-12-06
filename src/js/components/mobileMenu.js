const overlay = document?.querySelector(".overlay");
const hamburgerBtn = document?.querySelector(".header__hamburger-menu");
const hamburgerLines = hamburgerBtn.querySelector(".hamburger-lines");
const mobileMenu = document?.querySelector(".mobile-menu");
const productsBtn = document?.querySelector(".mobile-menu__products-btn");
const mobileContentBlock = document?.querySelector(".mobile-menu__content");
const mobileMenuSelect = document?.querySelector("#mobile-menu-select");
const contentList = document?.querySelectorAll(".mobile-menu__item-content");
const page = document?.querySelector(".page");

if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-menu--active");
    hamburgerLines.classList.toggle("hamburger-lines--active");
    overlay.classList.toggle("overlay--visible");
    page.classList.toggle("page--no-scroll");
  });
}

if (productsBtn) {
  productsBtn.addEventListener("click", () => {
    productsBtn.classList.toggle("mobile-menu__products-btn--active");
    mobileContentBlock.classList.toggle("mobile-menu__content--show");
  });
}

if (mobileMenuSelect) {
  mobileMenuSelect.addEventListener("change", (e) => {
    contentList.forEach((item) => {
      if (item.id === e.target.value) {
        item.classList.add("mobile-menu__item-content--show");
      } else {
        item.classList.remove("mobile-menu__item-content--show");
      }
    });
  });
}
