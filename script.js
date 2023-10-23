const menuIcon = document.querySelector(".menu-icon");
const lines = document.querySelector(".lines");
const container = document.querySelector(".container");

menuIcon.addEventListener("click", () => {
  container.classList.toggle("change");
});
