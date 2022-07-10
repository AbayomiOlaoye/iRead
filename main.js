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

// Form control logic
const addButton = document.querySelector('.add-book');
const form = document.querySelector('.form-section');
const exitButton = document.querySelector('.exit-btn');

// Button prompts form
addButton.addEventListener('click', () => {
  form.style.display = 'block';
});

// Eit button exits form
exitButton.addEventListener('click', () => {
  form.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === form) {
    addButton.addEventListener('click', () => {
      form.style.display = 'none';
    });
  }
});