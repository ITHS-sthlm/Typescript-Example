//Vi hämtar referenser som vi vill arbeta med i vår DOM
//Skapar ett interface som förutbestämmer datatyper i vårt projekt nedan
interface HTMLelements {
    nameInput: HTMLInputElement;
    messageSelect: HTMLSelectElement;
    output: HTMLDivElement;
    button: HTMLButtonElement;
    firstName: string;
    messageText: string;
}

//Vi hämtar referenser som vi vill arbeta med i vår DOM

const elements: HTMLelements = {
    nameInput: document.getElementById('name') as HTMLInputElement,
    messageSelect: document.getElementById('message') as HTMLSelectElement,
    output: document.getElementById('output') as HTMLDivElement,
    button: document.getElementById('greetButton') as HTMLButtonElement,
    //Lägger in "default värden"
    firstName: 'Richard',
    messageText: 'Välkommen'
};

//Lägger till en händelselyssnare
elements.button.addEventListener('click', () => {
    const firstName_ = elements.nameInput.value;
    const message = elements.messageSelect.value;

    //Skapa hälsningen
    const greeting = `Hej, ${firstName_ || elements.firstName}! ${
        message || elements.messageText
    }`;

    //Uppdatera innehållet i output elementet
    elements.output.textContent = greeting;
});
