// const navbar = document.querySelector(".credits-top");

// const observer = new IntersectionObserver((entries) => {
// 	entries.forEach((entry) => {
// 		if (entry.target === navbar) {
// 			if (!entry.isIntersecting) {
// 				// The navbar is out of view, show the burger
// 				burger.classList.add("burgermenu");
// 				nav.classList.add("navbar");
// 			} else {
// 				// The navbar is in view, hide the burger
// 				burger.classList.remove("burgermenu");
// 				nav.classList.remove("navbar");
// 			}
// 		}
// 	});
// });

window.addEventListener("load", function () {
  setTimeout(function () {
    var text = document.querySelector(".text");
    text.textContent = "© Portfolio by Rai";
  }, 1);

  setTimeout(function () {
    var preloader = document.querySelector(".preloader");
    preloader.classList.add("fade-out");
  }, 2000);

  var content = document.querySelector(".content");
  content.style.display = "block";
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  const box2 = document.getElementById("box2");
  const box3 = document.getElementById("box3");

  box2.style.transform = `translateY(${Math.max(
    0,
    100 - (scrollPosition / windowHeight) * 100
  )}%)`;
  box3.style.transform = `translateY(${Math.max(
    0,
    200 - (scrollPosition / windowHeight) * 100
  )}%)`;
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  const pj2 = document.getElementById("projects-content-2");
  const pj3 = document.getElementById("projects-content-3");

  pj2.style.transform = `translateY(${Math.max(
    0,
    100 - (scrollPosition / windowHeight) * 100
  )}%)`;
  pj3.style.transform = `translateY(${Math.max(
    0,
    200 - (scrollPosition / windowHeight) * 100
  )}%)`;
});

// Select all projects and numbers
const projects = document.querySelectorAll(".projects-content-container");

const onScroll = () => {
  projects.forEach((project, index) => {
    const rect = project.getBoundingClientRect();

    // Check when the project is in the viewport
    if (
      rect.top < window.innerHeight / 2 &&
      rect.bottom > window.innerHeight / 2
    ) {
      const numberElement = document.querySelector(".projects-number h1");
      numberElement.textContent = `0${index + 1}.`;
    }
  });
};

window.addEventListener("scroll", onScroll);

