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
    container.innerHTML = '';

    library.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.setAttribute('data-attribute', index);
        
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Status:</strong> ${book.hasRead ? 'Read' : 'Not read yet'}</p>
            <button class="remove-book" data-index="${index}">Remove Book</button>
        `;

        container.appendChild(bookCard);
    });
};

setUpEventListeners();