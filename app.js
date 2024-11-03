const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? 'read' : 'not read yet'}`;
};

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    console.log(`Added: ${newBook.title} by ${newBook.author}` ); //debugging output
};

function displayBooks(library) {
    for (let i = 0; i < library.length; i++) {
        console.table(library[i]);
    };
};

export { myLibrary, Book, addBookToLibrary, displayBooks};
