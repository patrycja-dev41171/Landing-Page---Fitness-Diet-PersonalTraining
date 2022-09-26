const menuBtn = document.getElementById("hamburger_menu_input");
const menu = document.getElementById("hamburger_menu");

menuBtn.addEventListener("click", () => {
  const isOpenMenu = menuBtn.checked;
  isOpenMenu ? menu.classList.remove("disable") : menu.classList.add("disable");
});
