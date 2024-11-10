import { myLibrary, addBookToLibrary, displayBooks } from './app.js';

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 324, false);
addBookToLibrary("Ultralearning", "Scott H. Young", 236, true);

displayBooks(myLibrary);
