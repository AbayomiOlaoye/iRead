/* Mobile menu setup */

// Grabbing elements
const menu = document.querySelector('.menu');
const navBar = document.querySelector('.nav-bar');
const links = document.querySelectorAll('.nav-list a');

// LOGIC for mobile menu toggling
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

window.addEventListener('click', (e) => {
  if (e.target === navBar) {
    navBar.style.display = 'none';
  }
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

// Declaring and initiating an empty array for book collection as user fills the form.
const iReadShelf = [
  {
    title: 'Single, Married and Divorced',
    author: 'Myles Munroe',
    pages: 285,
    status: ['Just bought it', 'Just started the reading', 'Almost done', 'Completed'],
    theme: 'An eye-opening scriptural truths and dispositions about these often misconstrued stages of life. It took a keen approach at inspiring, warning and uplifting its readers.',
    info: function commendReader() { return `A book written by ${this.author}`; },
  },
  {
    title: '85 Core Values Of Life',
    author: 'Robert Williams',
    pages: 385,
    status: ['Just bought it', 'Just started the reading', 'Almost done', 'Completed'],
    theme: 'Such an astute eloquence and compilation of working principles, values and basic characteristics needed for meaningful existence here in this space for influence.',
    info: function authorName() { return `A book written by ${this.author}`; },
  },
  {
    title: 'Single, Married and Divorced',
    author: 'Myles Munroe',
    pages: 285,
    status: ['Just bought it', 'Just started the reading', 'Almost done', 'Completed'],
    theme: 'An eye-opening scriptural truths and dispositions about these often misconstrued stages of life. I took a keen approach at inspiring, warning and uplifting its readers.',
    info: function commendReader() { return `A book written by ${this.author}`; },
  },
];

// Constructor function for book objects
function Book(title, author, pages, status, theme) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.theme = theme;
  this.info = function authorName() {
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
  iReadShelf.push(newStack);
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

document.addEventListener('DOMContentLoaded', () => {
  // Designing the book cards
  function unitCard(ebook) {
    return `<div class="book-card">
            <h3>${ebook.title}</h3>
            <p class="writer">${ebook.info()}</p>
            <p><span class="sub">Status:</span> <span class="book-alert">Almost Done</span> <a class="up-btn" href="#">Update Status</a></p>
            <label for="updateStatus">Have you read it?</label><br>
            <select class="updateStatus" name="updateStatus">
              <option selected value="Just bought it">I just bought it</option>
              <option value="Just started the reading">Just started reading it</option>
              <option value="Almost done">Almost done</option>
              <option value="Completed">Done reading</option>
            </select>
            <div class="brief">
              <p><span class="sub">Brief:</span><br>
                ${ebook.theme}
              </p>
            </div>
          </div>`;
  }

  const upBook = document.querySelector('.shelf');
  upBook.innerHTML = `${iReadShelf.map(unitCard).join('')}`;
});

shelfBook.addEventListener('submit', () => {

});
// Hide Book Status until button is clicked
// Update book status realtime

// updateCard[i].addEventListener('change', () => {
//   alert[i].textContent = updateCard[i].value;
//   updateCard[i].style.display = 'none';
// });

// updateCard[i].addEventListener('mouseout', () => {
//   updateCard[i].style.display = 'none';
// });

// updateCard[i].addEventListener('click', () => {
//   updateCard[i].style.display = 'none';
// });
