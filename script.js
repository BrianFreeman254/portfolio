// Interactive Effects for Portfolio
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('mouseenter', () => {
    project.style.transform = 'scale(1.2)';
  });
  project.addEventListener('mouseleave', () => {
    project.style.transform = 'scale(1)';
  });
});

// Hobbies Hover Animation
document.querySelectorAll('.hobbies li').forEach(hobby => {
  hobby.addEventListener('mouseenter', () => {
    hobby.style.transform = 'scale(1.2)';
  });
  hobby.addEventListener('mouseleave', () => {
    hobby.style.transform = 'scale(1)';
  });
});
