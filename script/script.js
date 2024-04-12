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
    text.textContent = "RAI";
    setTimeout(function () {
      text.textContent = "RAI REYES";
      setTimeout(function () {
        text.textContent = "RAI REYES JR.";
      }, 1000);
    }, 1000);
  }, 1000);

  setTimeout(function () {
    var preloader = document.querySelector(".preloader");
    preloader.classList.add("fade-out");
  }, 4000);

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


window.addEventListener('scroll', function() {
  const recentProjects = document.querySelector('.projects');
  const circle = document.querySelector('.circle-gradient-main');
  const scrollPosition = window.scrollY;

  // Adjust this value to determine when to return the circle
  const stopScrollPosition = recentProjects.offsetTop - window.innerHeight;

  // Check if scroll position is above the recent projects section
  if (scrollPosition < stopScrollPosition) {
    // Check if the circle exists in the DOM
    if (!document.contains(circle)) {
      // Add the circle back into the DOM
      document.body.appendChild(circle); // Adjust the parent element if necessary
      circle.style.display = 'block';
      // or
      // circle.style.display = 'block'; // Show the circle if it was hidden
    }
  }
  else if (scrollPosition > stopScrollPosition) {
    // Remove or hide the circle
    circle.style.display = 'none';
    // or
    // circle.style.display = 'none'; // Use .style.display to hide the element
  }
});
