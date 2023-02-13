// ─── Selectors ───────────────────────────────────────────────────────────────
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBook = document.querySelector('#addBook');
const infoContainer = document.querySelector('.container');


// ─── Functions ───────────────────────────────────────────────────────────────

const bookCollection = [
    { title: '', author: '' },
]


function addingBook() {

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const line = document.createElement('hr');
    const removeBtn = document.createElement('button');

    for (let i = 0; i < bookCollection.length; i += 1) {
        bookCollection[i].title = bookTitle.value;

        bookCollection[i].author = bookAuthor.value;
        createBook(bookCollection[i].title, bookCollection[i].author)


    }

    infoContainer.append(p1, p2, removeBtn, line);
    bookAuthor.value = '';
    bookTitle.value = '';

    function createBook(title, author) {

        p1.setAttribute('id', 'booktitle');
        p2.setAttribute('id', 'bookauthor');
        p1.textContent = title;
        p2.textContent = author;
        removeBtn.textContent = 'Remove';
    }
}





// ─── Listerners ──────────────────────────────────────────────────────────────

addBook.addEventListener('click', addingBook);