// ─── Selectors ───────────────────────────────────────────────────────────────
// const bookTitle = document.querySelector('#bookTitle');
// const bookAuthor = document.querySelector('#bookAuthor');
// const addBookBtn = document.querySelector('#addBook');
// const lists = document.querySelector('.lists');

// class Book {
//     bookCollection = [];

//     storageName = 'bookCollection';

//     constructor() {
//         this.bookCollection = this.getBooksFromLocalStorag();
//         addBookBtn.addEventListener('click', () => {
//             this.addBook();
//             this.saveBookToLocalStorage();
//         });
//     }

//     addBook() {
//         const book = { title: bookTitle.value, author: bookAuthor.value }
//         this.bookCollection.push(book);
//         bookAuthor.value = '';
//         bookTitle.value = '';
//     }

//     // eslint-disable-next-line consistent-return
//     getBooksFromLocalStorag() {
//         const getBooks = localStorage.getItem(this.storageName);
//         if (getBooks) {
//             return JSON.parse(getBooks);
//         }else{
//             return this.bookCollection;
//         }

//     }

//     saveBookToLocalStorage() {
//         window.localStorage.setItem(this.storageName, JSON.stringify(this.bookCollection));
//     }

//     removeBook(item) {
//         this.bookCollection = this.bookCollection.filter((book, index) => item !== index);
//     }

//     showAllBooks() {}
// }

class Books {

    storageName = 'bookCollection';

    constructor() {
            this.bookTitle = document.querySelector('#bookTitle');
            this.bookAuthor = document.querySelector('#bookAuthor');
            this.addBookBtn = document.querySelector('#addBook');
            this.bookCollection = this.getBooksFromLocalStorage();
            this.list = document.querySelector('.list');
            this.addBookBtn.addEventListener('click', () => {
                this.addBook();
                this.saveBookToLocalStorage();
                console.log("Working");
            });
        }
        // eslint-disable-next-line consistent-return
    getBooksFromLocalStorage() {
        if (localStorage.storageName) {
            return JSON.parse(getBooks);
        }
        return [];
    }

    addBook() {
        const book = { title: bookTitle.value, author: bookAuthor.value }
        this.bookCollection.push(book);
        bookAuthor.value = '';
        bookTitle.value = '';
    }

    saveBookToLocalStorage() {
        window.localStorage.setItem(this.storageName, JSON.stringify(this.bookCollection));
    }

    removeBook(item) {
        this.bookCollection = this.bookCollection.filter((book, index) => item !== index);
    }

    showAllBooks() {
        this.list.innerHTML = `<div class="books">
        
        <p>Book1</p>
        <button class="remove">Remove</button>
    </div>
    `
    }
}

window.onload = () => {
    const myBook = new Books()
    myBook.showAllBooks();
}

// class Book {
//   static bookCollection = [];
//   constructor(title, author) {
//    this.title = title;
//    this.author = author;
//   }

//   addBook(){

//     const book = { title: '', author: '' };
//     book.title = bookTitle.value;
//     book.author = bookAuthor.value;
//     Book.bookCollection.push(book);

//       const wrapper = document.createElement('div');
//       const p1 = document.createElement('p');
//       const p2 = document.createElement('p');
//       const line = document.createElement('hr');
//       const removeBtn = document.createElement('button');
//       for(let i = 0; i < Book.bookCollection.length; i += 1){
//         p1.textContent = Book.bookCollection[i].title;
//         p2.textContent = Book.bookCollection[i].author;
//       }

//       removeBtn.textContent = 'Remove';
//       wrapper.append(p1, p2, removeBtn, line);
//       lists.prepend(wrapper);
//       bookAuthor.value = '';
//       bookTitle.value = '';
//       localStorage.setItem('bookCollection', JSON.stringify(Book.bookCollection));

//   }
// }

// const bookOne =
// const bookTwo = new Book('hello', 'my ma')

// for(let i = 0; i < 4; i += 1) {
//   bookOne.book1();
//   bookTwo.book2();
// }

// addBookBtn.addEventListener('click', () => {
//     if (localStorage.getItem('bookCollection') === null) {
//         localStorage.setItem('bookCollection', '[]');
//     }
//     const createBook = new Book();
//     createBook.addBook();
// });

// ─── Functions ───────────────────────────────────────────────────────────────

// let bookCollection = [];

// function removeBooks() {
//   const el = document.querySelector(`.${this.id}`);
//   const rem = this.id;
//   const index = rem.replace('btn-', '');
//   const span = document.createElement('span');
//   span.textContent = `element with this ${parseInt(index, 10)} id removed`;
//   span.style.display = 'none';
//   bookCollection.splice(index, 1);
//   localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
//   el.remove();
// }

// function createBook(item) {
//   bookCollection = JSON.parse(localStorage.getItem('bookCollection'));
//   const wrapper = document.createElement('div');
//   const p1 = document.createElement('p');
//   const p2 = document.createElement('p');
//   const line = document.createElement('hr');
//   const removeBtn = document.createElement('button');
//   wrapper.className = 'container';
//   p1.setAttribute('id', 'booktitle');
//   p2.setAttribute('id', 'bookauthor');
//   removeBtn.textContent = 'Remove';
//   p1.textContent = bookCollection[item].title;
//   p2.textContent = bookCollection[item].author;
//   wrapper.className = `btn-${item}`;
//   removeBtn.setAttribute('id', `btn-${item}`);
//   wrapper.append(p1, p2, removeBtn, line);
//   removeBtn.addEventListener('click', removeBooks);

//   lists.prepend(wrapper);
// }

// function addingBook() {
//   const book = { title: '', author: '' };
//   book.title = bookTitle.value;
//   book.author = bookAuthor.value;
//   bookCollection.push(book);

//   localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
//   bookAuthor.value = '';
//   bookTitle.value = '';
//   if (localStorage.getItem('bookCollection') !== null) {
//     createBook((bookCollection.length - 1));
//   }
// }

// // ─── Listerners ──────────────────────────────────────────────────────────────

// addBookBtn.addEventListener('click', addingBook);

// window.onload = () => {
//   if (localStorage.getItem('bookCollection') !== null) {
//     bookCollection = JSON.parse(localStorage.getItem('bookCollection'));
//     for (let i = 0; i < bookCollection.length; i += 1) {
//       createBook(i);
//     }
//   }
// };