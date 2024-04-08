
const navLinks = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  const isVisible = navLinks.classList.contains("visible");

  if (!isVisible) {
    navLinks.classList.add("visible");
  } else {
    navLinks.classList.remove("visible");
  }
});

const nav = document.querySelector("nav");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio === 0) {
      burger.style.display = "block";
    } else {
      burger.style.display = "none";
      navLinks.classList.remove("visible");
    }
  });
}, { threshold: 1 });

// Observe the nav element
observer.observe(nav);
