const navLinks = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burgermenu");

burger.addEventListener("click", () => {
  let isVisible = burgerMenu.classList.contains('active');

  if (!isVisible) {
    burgerMenu.classList.add("active");
  } else {
    burgerMenu.classList.remove("active");
  }
});

burger.addEventListener('click', function() {
  this.classList.toggle('open');
});