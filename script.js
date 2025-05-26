const DisplayController = (function () {
    const mainMenu = document.querySelector("#main-menu");
    const hamburger = document.querySelector("#hamburger");
    const backButton = document.querySelector("#back-btn");
    const contactButton = document.querySelector("#contact-btn");
    const contactForm = document.querySelector("#contact-form");

    hamburger.addEventListener('click', () => {
        // If contact form is open close it
        if (!contactForm.classList.contains("hidden")) {
            toggleClass(contactForm, "hidden");
        }

        toggleClass(mainMenu, "hidden");
    });

    backButton.addEventListener('click', () => toggleClass(mainMenu, "hidden"));
    contactButton.addEventListener('click', () => {
        toggleClass(mainMenu, "hidden");
        toggleClass(contactForm, "hidden");
    });

    const toggleClass = (element, classStr) => {
        element.classList.toggle(classStr);
    };

})();