// ─── Selectors ───────────────────────────────────────────────────────────────
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBook = document.querySelector('#addBook');
const lists = document.querySelector('.lists');

// ─── Functions ───────────────────────────────────────────────────────────────

let bookCollection = [];

function removeBooks() {
  const el = document.querySelector(`.${this.id}`);
  const rem = this.id;
  const index = rem.replace('btn-', '');
  const span = document.createElement('span');
  span.textContent = `element with this ${parseInt(index, 10)} id removed`;
  span.style.display = 'none';
  bookCollection.splice(index, 1);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  el.remove();
}

function createBook(item) {
  bookCollection = JSON.parse(localStorage.getItem('bookCollection'));
  const wrapper = document.createElement('div');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const line = document.createElement('hr');
  const removeBtn = document.createElement('button');
  wrapper.className = 'container';
  p1.setAttribute('id', 'booktitle');
  p2.setAttribute('id', 'bookauthor');
  removeBtn.textContent = 'Remove';
  p1.textContent = bookCollection[item].title;
  p2.textContent = bookCollection[item].author;
  wrapper.className = `btn-${item}`;
  removeBtn.setAttribute('id', `btn-${item}`);
  wrapper.append(p1, p2, removeBtn, line);
  removeBtn.addEventListener('click', removeBooks);

  lists.prepend(wrapper);
}

function addingBook() {
  const book = { title: '', author: '' };
  book.title = bookTitle.value;
  book.author = bookAuthor.value;
  bookCollection.push(book);

  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  bookAuthor.value = '';
  bookTitle.value = '';
  if (localStorage.getItem('bookCollection') !== null) {
    createBook((bookCollection.length - 1));
  }
}

// ─── Listerners ──────────────────────────────────────────────────────────────

addBook.addEventListener('click', addingBook);

window.onload = () => {
  if (localStorage.getItem('bookCollection') !== null) {
    bookCollection = JSON.parse(localStorage.getItem('bookCollection'));
    for (let i = 0; i < bookCollection.length; i += 1) {
      createBook(i);
    }
  }
};