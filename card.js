// const updateCard = document.querySelectorAll('.updateStatus');
const updateButton = document.querySelectorAll('.up-btn');
// const alert = document.querySelectorAll('.book-alert');

updateButton.forEach((up) => {
  up.addEventListener('mouseover', () => {
  });
});

const select = document.createElement('select');
select.setAttribute('id', 'newSelect)');
document.querySelector('.hero-page').appendChild(select);

const opt1 = document.createElement('option');
opt1.setAttribute('value', 'just bought it');
opt1.textContent = 'Just bought it';
select.add(opt1);