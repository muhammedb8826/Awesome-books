// ─── Selectors ───────────────────────────────────────────────────────────────

const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBook = document.querySelector('#addBook');


// ─── Functions ───────────────────────────────────────────────────────────────

function addingBook() {
    console.log(bookTitle.value);
}


// ─── Listerners ──────────────────────────────────────────────────────────────

addBook.addEventListener('click', addingBook);