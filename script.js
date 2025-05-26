const DisplayController = (function () {
    const mainMenu = document.querySelector("#main-menu");
    const hamburger = document.querySelector("#hamburger");
    const backButton = document.querySelector("#back");

    hamburger.addEventListener('click', () => toggleMainMenu());
    backButton.addEventListener('click', () => toggleMainMenu());

    const toggleMainMenu = () => {
        mainMenu.classList.toggle("hidden");
    };

})();