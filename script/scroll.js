
const galleryImages = document.querySelectorAll('.projects-gallery-images');

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  const st = window.scrollY;

  if (st > lastScrollTop) {
    // Scroll down
    gsap.to(galleryImages[0], { x: "200px", duration: 0.1 }); // Move the first gallery to the right
    gsap.to(galleryImages[1], { x: "-200px", duration: 0.1 }); // Move the second gallery to the left
  } else {
    // Scroll up
    gsap.to(galleryImages[0], { x: "0px", duration: 0.1 }); // Move the first gallery back to its original position
    gsap.to(galleryImages[1], { x: "0px", duration: 0.1 }); // Move the second gallery back to its original position
  }

  lastScrollTop = st <= 0 ? 0 : st;
});