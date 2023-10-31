"use strict";
//Vi hämtar referenser som vi vill arbeta med i vår DOM
const elements = {
    nameInput: document.getElementById('name'),
    messageSelect: document.getElementById('message'),
    output: document.getElementById('output'),
    button: document.getElementById('greetButton'),
    //Lägger in "default värden"
    firstName: 'Richard',
    messageText: 'Välkommen'
};
//Lägger till en händelselyssnare
elements.button.addEventListener('click', () => {
    const firstName_ = elements.nameInput.value;
    const message = elements.messageSelect.value;
    //Skapa hälsningen
    const greeting = `Hej, ${firstName_ || elements.firstName}! ${message || elements.messageText}`;
    //Uppdatera innehållet i output elementet
    elements.output.textContent = greeting;
});
//# sourceMappingURL=index.js.map