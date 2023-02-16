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
              this.showAllBooks();
              console.log("Working");
          });
      }
      // eslint-disable-next-line consistent-return
      getFromLocalStorage() { 
           const cachedBooks = window.localStorage.getItem(this.storageName);    return cachedBooks ? JSON.parse(cachedBooks) : [];  
          }



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
      this.list.innerHTML =
      `<div class="books">
      <p>Book1</p>
      <button class="remove">Remove</button>
      `
  
  }

  showAllBooks() {    this.list.innerHTML = this.bookCollection.map((book) => `<div class="books"><p id="title">"${book.title}" by ${book.author}</p><button class="remove">Remove</button></div>`,).join('');
  const remove = Array.from(document.getElementsByClassName('remove'));    
  this.showAllBooks(); 
}
}
window.onload = () => {
  const mybook = new Books();
  mybook.showAllBooks();
}