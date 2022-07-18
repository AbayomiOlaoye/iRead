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

class LibraryShelf {
  static showBooks() {
    // Declaring and initiating an array for book collection as user fills the form.
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
    ];

    iReadShelf.forEach((book) => LibraryShelf.addToList(book));
  }

  static addToList(book) {
    const upBook = document.querySelector('.shelf');
    const newCard = document.createElement('div');
    newCard.className = ('new-card');
    newCard.innerHTML += `
                <h3>${book.title} <i class="material-icons icon">cancel</i></h3>
                <p class="writer">${book.info()}</p>
                <p><span class="sub">Status:</span> <span class="book-alert">Almost Done</span> <a class="up-btn" href="#">Update Status</a></p>
                <select class="updateStatus" name="updateStatus">
                  <option selected value="Just bought it">I just bought it</option>
                  <option value="Just started the reading">Just started reading it</option>
                  <option value="Almost done">Almost done</option>
                  <option value="Completed">Done reading</option>
                </select>
                <div class="brief">
                  <p><span class="sub">Brief:</span><br>
                    ${book.theme}
                  </p>
                </div>`;
    upBook.appendChild(newCard);
  }

  // Delete books
  removeBook(pop) {
    if (pop.classList.contains('icon')) {
      this.LibraryShelf.addToList(null);
    }
  }
}

// Display Books
document.addEventListener('DOMContentLoaded', LibraryShelf.showBooks);

// Add Books
document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Collection of inputs to be used as objects for books
  const bookTitle = document.querySelector('#title').value;
  const bookAuthor = document.querySelector('#author').value;
  const bookPages = document.querySelector('#pages').value;
  const bookStatus = document.querySelector('#status').value;
  const bookTheme = document.querySelector('#theme').value;

  // Instantiating new book:
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus, bookTheme);

  // Add to List
  LibraryShelf.addToList(newBook);
  document.querySelector('.form').reset();
  form.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
  const qty = document.querySelectorAll('.book-card');
  const button = document.querySelectorAll('.up-btn');
  const select = document.querySelectorAll('.updateStatus');
  const alert = document.querySelectorAll('.book-alert');

  for (let i = 0; i < qty.length; i += 1) {
    button[i].addEventListener('mouseover', () => {
      select[i].style.display = 'inline-flex';
    });

    select[i].addEventListener('change', () => {
      alert[i].innerHTML = select[i].value;
      select[i].style.display = 'none';
    });

    document.querySelector('.icon')[i].addEventListener('click', () => {
      LibraryShelf.removeBook(null);
    });
  }
});

// document.querySelector('.icon').forEach((del) => {
//   del.addEventListener('click', () => {

//   });
// });
// // Testing Local Storage
// function storage() {
//   const bookData = JSON.stringify(iReadShelf);
//   localStorage.setItem('booksRead', bookData);
// }

// shelfBook.addEventListener('click', (e) => {
//   e.preventDefault();
//   addBooks();
//   storage();
// });
