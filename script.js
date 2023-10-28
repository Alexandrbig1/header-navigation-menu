const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const hElements = document.getElementsByTagName("h1");

menuIcon.addEventListener("click", () => {
  container.classList.toggle("change");
  header.classList.toggle("shift-header");

  for (let i = 0; i < hElements.length; i++) {
    hElements[i].classList.toggle("change-h1");
  }
});
