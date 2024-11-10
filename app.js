import { setUpEventListeners } from "./dom.js";

export const myLibrary = [];

export function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
};

export function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
};

export const displayBooks = (library) => {
    const container = document.getElementById('book-container');
    container.innerHTML = ''; //clears previous entries (no duplicates essentially)?????? but does it?

    library.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Status:</strong> ${book.hasRead ? 'Read' : 'Not read yet'}</p>
        `;

        container.appendChild(bookCard);
    });
};

setUpEventListeners();


// when a user click submit, the contents added in the fields will be pushed to myLibrary. 
// a user should be able to remove the book from the library and updates the display