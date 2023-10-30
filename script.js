document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-img");
  const container = document.querySelector(".container");
  const header = document.querySelector(".header");
  const hElements = document.querySelectorAll(".header h1");
  const navItems = document.querySelector(".nav-items");

  menuIcon.addEventListener("mouseenter", () => {
    container.classList.add("change");
    header.classList.add("shift-header");
    hElements.forEach((element) => {
      element.classList.add("change-h1");
    });
  });

  navItems.addEventListener("mouseleave", () => {
    container.classList.remove("change");
    header.classList.remove("shift-header");

    hElements.forEach((element) => {
      element.classList.remove("change-h1");
    });
  });

  
});

const content = document.getElementsByClassName('new');

var i;
for( i = 0; i < content.length; i++){

    content[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
};