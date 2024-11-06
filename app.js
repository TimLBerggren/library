import { dialog, showButton, closeButton } from "./dom.js";

export const myLibrary = [];

export function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? 'read' : 'not read yet'}`;
};

export function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
};

export const displayBooks = (library) => {
    const container = document.getElementById('book-container');
    container.innerHTML = ''; //clears previous entries (no duplicates essentially)??????

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

// TESTING

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
// TESTING
