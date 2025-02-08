const messages = [
    "Segura???",
    "Piensalo bienn",
    "Ya lo pensaste???",
    "Porfaaa",
    "Porfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "Si dices que no voy a llorar",
    "Voy a llorar",
    "Me voy a matar",
    "Ok",
    "Di que siiiiiiiiiiiiiiii"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
