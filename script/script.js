const navbar = document.querySelector(".credits-top");

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.target === navbar) {
			if (!entry.isIntersecting) {
				// The navbar is out of view, show the burger
				burger.classList.add("burgermenu");
				nav.classList.add("navbar");
			} else {
				// The navbar is in view, hide the burger
				burger.classList.remove("burgermenu");
				nav.classList.remove("navbar");
			}
		}
	});
});


window.addEventListener('load', function() {
  
  setTimeout(function() {
    var text = document.querySelector('.text');
    text.textContent = 'RAI';
    setTimeout(function() {
      text.textContent = 'RAI REYES';
      setTimeout(function() {
        text.textContent = 'RAI REYES JR.';
      }, 1000);
    }, 1000);
  }, 1000);

  setTimeout(function() {
    var preloader = document.querySelector('.preloader');
    preloader.classList.add('fade-out');
  }, 4000);

  var content = document.querySelector('.content');
  content.style.display = 'block';
});


window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  
  const box2 = document.getElementById('box2');
  const box3 = document.getElementById('box3');
  
  box2.style.transform = `translateY(${Math.max(0, 100 - scrollPosition / windowHeight * 100)}%)`;
  box3.style.transform = `translateY(${Math.max(0, 200 - scrollPosition / windowHeight * 100)}%)`;
});
