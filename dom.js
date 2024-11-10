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
};
