# Library App
### Preview: https://timlberggren.github.io/library/
## Introduction
This project is a simple library app created using JavaScript, HTML, and CSS. It’s designed to consolidate key front-end development concepts like object-oriented programming, DOM manipulation, and event handling. The app allows users to add, view, delete, and update the read status of books in a library.

## What I Learned
### JavaScript
- Object-Oriented Programming: Created a Book constructor to model each book as an object with properties like title, author, pages, and read status.
- Array Management: Stored books in an array (myLibrary) and added functions to manage book objects within it.
- DOM Manipulation: Dynamically updated the display of books, allowing for interactive elements like buttons to delete or update a book’s read status.
- Event Handling: Utilized event listeners to make the app responsive to user actions, such as submitting the "New Book" form and clicking buttons to delete or modify books.
### HTML & CSS
- HTML Structure: Set up the app interface, including the "New Book" form for user input and structured layout for book displays, with buttons for actions.
- CSS Styling: Styled the app to make it visually engaging, presenting books as cards or in a table format.
## Problem Solving
- Form Handling: Used event.preventDefault() to manage form submissions without refreshing the page, which allowed for real-time updates to myLibrary.
- Data and Display Separation: Kept the book data structure (myLibrary) separate from its presentation, making the app’s logic more organized and scalable.
- Indexing for Dynamic Elements: Used data-attributes to track each book's position in myLibrary, making it easy to link DOM elements to their respective array items.
## Extra Features
- Modal for New Book Form: Experimented with displaying the "New Book" form in a modal, making it feel more polished and user-friendly.
