const menuIcon = document.querySelector(".menu-icon");
const lines = document.querySelector(".lines");
const container = document.querySelector(".container");

menuIcon.addEventListener("click", () => {
  container.classList.toggle("change");
});

const content = document.getElementsByClassName('new');

var i;
for( i = 0; i < content.length; i++){

    content[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
};