// ─── Selectors ───────────────────────────────────────────────────────────────
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBook = document.querySelector('#addBook');
const infoContainer = document.querySelector('.container');


// ─── Functions ───────────────────────────────────────────────────────────────

const bookCollection = [
    {title: '', author: ''},
]


function addingBook() {
    const p1 = document.createElement('p');
    p1.setAttribute('id', 'booktitle');
    const p2 = document.createElement('p');
    p2.setAttribute('id', 'bookauthor');
     for(let i = 0; i < bookCollection.length; i += 1){
        bookCollection[i].title = bookTitle.value;
        p1.textContent = bookCollection[i].title;
        bookCollection[i].author = bookAuthor.value;
        p2.textContent = bookCollection[i].author;
     }
    infoContainer.append(p1,p2);
    bookAuthor.value = '';
    bookTitle.value = '';
}


// ─── Listerners ──────────────────────────────────────────────────────────────

addBook.addEventListener('click', addingBook);