const project = document.getElementById('project1');
const viewMore = project.querySelector('.view-more');
const burger = document.getElementById('burger');
const magnet = document.createElement('div');
magnet.classList.add('magnet-effect');
project.appendChild(magnet);

const handleHover = (e) => {
  const rect = project.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const magnetX = project.clientWidth / 2;
  const magnetY = project.clientHeight / 2;

  const deltaX = mouseX - magnetX;
  const deltaY = mouseY - magnetY;

  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  const maxDistance = 200; // Adjust the maximum distance

  if (distance < maxDistance) {
    magnet.style.opacity = 1;
    magnet.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    viewMore.style.opacity = 1;
    viewMore.style.transform = `translate(-50%, -50%) translate(${deltaX}px, ${deltaY}px)`;
    burger.style.opacity = 1;
    burger.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  } else {
    magnet.style.opacity = 0;
    viewMore.style.opacity = 0;
    burger.style.opacity = 0;
  }
};

project.addEventListener('mousemove', handleHover);
burger.addEventListener('mousemove', handleHover);