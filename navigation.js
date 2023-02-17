const addBookLink = document.getElementById('addBookLink');
const listLink = document.getElementById('listLink');
const contactLink = document.getElementById('contactLink');

const bookCollections = document.getElementById('bookCollections');
const addBooks = document.getElementById('AddBooks');
const contactInfo = document.getElementById('contactInfo');

listLink.addEventListener('click', () => {
  bookCollections.style.display = 'flex';
  addBooks.classList.remove('active');
  contactInfo.classList.remove('active');
});

addBookLink.addEventListener('click', () => {
  addBooks.classList.toggle('active');
  bookCollections.style.display = 'none';
  contactInfo.classList.remove('active');
});

contactLink.addEventListener('click', () => {
  contactInfo.classList.toggle('active');
  bookCollections.style.display = 'none';
  addBooks.classList.remove('active');
});