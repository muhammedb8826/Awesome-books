const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const addBook = document.getElementById('addBook');


// const form = document.getElementById('form');

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     console.log(bookTitle.value);
// })


addBook.addEventListener('click', ()=>{
    alert(bookTitle.value);
})
