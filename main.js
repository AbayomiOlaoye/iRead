/* Mobile menu setup */

// Grabbing elements
const menu = document.querySelector('.menu');
const navBar = document.querySelector('.nav-bar');
const links = document.querySelectorAll('.nav-list a');

// LOGIC for toggling
menu.addEventListener('click', () => {
  if (navBar.style.display === 'none') {
    navBar.style.display = 'contents';
  } else {
    navBar.style.display = 'none';
  }
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    navBar.style.display = 'none';
  });
});