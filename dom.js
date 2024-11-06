export const setUpEventListeners = () => {
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector("dialog + button");
    const closeButton = document.querySelector("dialog button");
    
    showButton.addEventListener("click", () => {
        dialog.showModal();
        console.log("I am working!");
    });
    
    closeButton.addEventListener("click", () => {
        dialog.close();
        console.log("I am working!!");
    });
};

