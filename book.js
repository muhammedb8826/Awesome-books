// ─── Selectors ───────────────────────────────────────────────────────────────
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBook = document.querySelector('#addBook');
const lists = document.querySelector('.lists');

// ─── Functions ───────────────────────────────────────────────────────────────

const bookCollection = [];

function removeBooks() {
    const el = document.querySelector(`.${this.id}`);
    el.remove();
}

function createBook() {
    let listOfBooks = [];

    if (localStorage.getItem('bookCollection') !== null) {
        listOfBooks = JSON.parse(localStorage.getItem('bookCollection'));
    }
    const wrapper = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const line = document.createElement('hr');
    const removeBtn = document.createElement('button');
    wrapper.className = 'container';
    p1.setAttribute('id', 'booktitle');
    p2.setAttribute('id', 'bookauthor');
    removeBtn.textContent = 'Remove';
    for (let i = 0; i < listOfBooks.length; i += 1) {
        p1.textContent = listOfBooks[i].title;
        p2.textContent = listOfBooks[i].author;
        wrapper.className = `btn-${i}`;
        removeBtn.setAttribute('id', `btn-${i}`);
    }
    wrapper.append(p1, p2, removeBtn, line);
    removeBtn.addEventListener('click', removeBooks);

    lists.prepend(wrapper);
}

function addingBook() {
    const book = { title: '', author: '' };
    book.title = bookTitle.value;
    book.author = bookAuthor.value;
    bookCollection.push(book);
    if (localStorage.getItem('bookCollection') === null) {
        localStorage.setItem('bookCollection', '[]');
    }

    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
    bookAuthor.value = '';
    bookTitle.value = '';
    createBook();
}

// ─── Listerners ──────────────────────────────────────────────────────────────

addBook.addEventListener('click', addingBook);