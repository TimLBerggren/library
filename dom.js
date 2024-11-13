import { myLibrary, addBookToLibrary, displayBooks } from "./app.js";

export const setUpEventListeners = () => {
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector("dialog + button");
    const closeButton = dialog.querySelector("button[type='button']");
    const form = dialog.querySelector("form")
    
    showButton.addEventListener("click", () => {
        dialog.showModal();
        console.log("Dialog opened");
    });
    
    closeButton.addEventListener("click", () => {
        dialog.close();
        console.log("Dialog closed!");
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = form.title.value;
        const author = form.author.value;
        const pages = form.pages.value;
        const hasRead = form.read.checked;

        addBookToLibrary(title, author, pages, hasRead);
        displayBooks(myLibrary);

        form.reset();
        dialog.close();
    });

    const container = document.getElementById('book-container');
    container.addEventListener("click", (event) => {
        if (event.target.classList.contains('remove-book')) {
            const index = event.target.getAttribute('data-index');
            myLibrary.splice(index, 1);
            displayBooks(myLibrary);
        }
    
        if (event.target.classList.contains('read-status')) {
            const index = event.target.getAttribute('data-index');
            myLibrary[index].toggleReadStatus();
            displayBooks(myLibrary);
            console.log("read status updated")
        }
    });
};
