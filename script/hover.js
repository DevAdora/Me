// Get all project content elements
const projectContents = document.querySelectorAll('.project-content');

// Loop through each project content element
projectContents.forEach(projectContent => {
  // Find the view more element within the current project content
  const viewMore = projectContent.querySelector('.view-more');

  // Create a magnet element for each project content
  const magnet = document.createElement('div');
  magnet.classList.add('magnet-effect');
  projectContent.appendChild(magnet);

  // Add event listeners to each project content
  projectContent.addEventListener('mousemove', (e) => {
    const rect = projectContent.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const magnetX = projectContent.clientWidth / 2;
    const magnetY = projectContent.clientHeight / 2;

    const deltaX = mouseX - magnetX;
    const deltaY = mouseY - magnetY;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    const maxDistance = 600; // Adjust the maximum distance

    if (distance < maxDistance) {
      magnet.style.opacity = 1;
      magnet.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      viewMore.style.opacity = 1;
      viewMore.style.transform = `translate(-50%, -50%) translate(${deltaX}px, ${deltaY}px)`;
    } else {
      magnet.style.opacity = 0;
      viewMore.style.opacity = 0;
    }
  });

  projectContent.addEventListener('mouseout', () => {
    magnet.style.opacity = 0;
    viewMore.style.opacity = 0;
  });
});

// Add event listener to the burger element
burger.addEventListener('mousemove', handleHover);
