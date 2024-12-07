const productTabs = document.querySelectorAll(".tabs__nav-item");
const productContents = document.querySelectorAll(".tabs__panel");
const rpaTabs = document.querySelectorAll(".horizontal-tabs__nav-item");
const rpaContents = document.querySelectorAll(".horizontal-tabs__panel");
const activeTab = document.querySelector(".tabs__nav-item--active");
const underline = document.querySelector(".horizontal-tabs__underline");
function updateUnderline() {
  const activeTab = document.querySelector(
    ".horizontal-tabs__nav-item--active"
  );

  if (underline) {
    underline.style.maxWidth = `${activeTab.offsetWidth}px`;
    underline.style.left = `${activeTab.offsetLeft}px`;
  }
}
const changeActiveTab = (tabs, contents) => {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) =>
        t.classList.remove("horizontal-tabs__nav-item--active")
      );
      tab.classList.add("horizontal-tabs__nav-item--active");

      const target = tab.getAttribute("data-target");

      contents.forEach((content) => {
        if (content.id === target) {
          content.classList.add("horizontal-tabs__panel--active");
        } else {
          content.classList.remove("horizontal-tabs__panel--active");
        }
      });

      updateUnderline();
    });
  });
};

changeActiveTab(productTabs, productContents);
changeActiveTab(rpaTabs, rpaContents);
updateUnderline();
