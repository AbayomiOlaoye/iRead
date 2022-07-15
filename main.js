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

// // Declaring and initiating an empty array for book collection as user fills the form.
const iReadShelf = [];

// Constructor function for book objects
function Book(title, author, pages, status, theme) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.theme = theme;
  this.info = function commendReader() {
    return `A book written piece by ${this.author}.`;
  };
}

// Collection of inputs to be used as objects
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookStatus = document.querySelector('#status');
const bookTheme = document.querySelector('#theme');
const shelfBook = document.querySelector('.shelf-book');
let newStack;
function addBooks() {
  newStack = new Book(bookTitle.value, bookAuthor.value, bookPages.value,
    bookStatus.value, bookTheme.value);
  return iReadShelf.push(newStack);
}

// Testing Local Storage
function storage() {
  const bookData = JSON.stringify(iReadShelf);
  localStorage.setItem('booksRead', bookData);
}

shelfBook.addEventListener('click', (e) => {
  e.preventDefault();
  addBooks();
  storage();
  form.style.display = 'none';
});

// Designing the book cards
// function designBookShelf(book) {
//   return `<div class="book-card">
//     <h2>${iReadShelf[0].title}</h2>
//   </div>`;
// }

// Writing expressions to put books on shelf
// document.querySelector('.container').innerHTML = ``