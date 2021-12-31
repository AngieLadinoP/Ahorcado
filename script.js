let wordList = [
    ["ABARROTES", "Artículos de uso doméstico"],
    ["ACECINAR", "Salar cualquier tipo de carne ahumada"],
    ["ACIDIA", "Pereza"],
    ["BOREAS", "Viento que sopla del norte"],
    ["BUFAR", "Manifestar enojo con sonidos"],
    ["CALIGINOSO", "Nebuloso, turbio, oscuro"],
    ["CAPCIOSO", "Engañoso, que conduce a error"],
    ["DADIVAS", "Regalos, presentes"],
    ["DENUESTO", "Palabra empleada para insultar"],
    ["EMASCULAR", "Castrar"],
    ["EMBELECAR", "Engañar con halagos"],
    ["FENECER", "Concluir, Morir"],
    ["FIGARO", "Barbero"],
    ["GARLITO", "Trampa o engaño para una persona"],
    ["HESITACION", "Duda, vacilación"],
    ["HISTRION", "Actor de teatro"],
    ["IDONEO", "Apto"],
    ["INCITAR", "Estimular"],
    ["JAEZ", "Adorno que se pone a las caballerías"],
    ["JACARO", "Fanfarrón"],
    ["KAYAK", "Canoa individual que utilizan los esquimales"],
    ["KEFIR", "Alimento turco gelatinoso semejante al yogur"],
    ["LADINO", "Actúa con astucia y disimulo"],
    ["LASO", "Desfallecido, cansado, sin fuerzas"],
    ["MACULA", "Mancha"],
    ["MELOPEA", "Canto monótono"],
    ["NIMIO", "Insignificante"],
    ["NEPOTISMO", "Abuso de poder para favorecer parientes y amigos"],
    ["ÑAPA", "Gratificación pequeña para recompensar un servicio"],
    ["ÑIQUIÑAQUE", "Despreciable"],
    ["OBNUBILAR", "Hacer perder la capacidad de razonar"],
    ["OBITO", "Muerte de una persona"],
    ["PANACEA", "Remedio para cualquier tipo de problema"],
    ["PATRAÑA", "Mentira o falsedad grande y complicada"],
    ["QUERELLA", "Acusación"],
    ["QUEJA", "Reclamación o protesta"],
    ["RECOLETO", "Lugar apartado"],
    ["ROZAGANTE", "Vistoso"],
    ["SINDERESIS", "Juzgar rectamente, con acierto"],
    ["SOFLAMA", "En España, arenga"],
    ["TARUGO", "En México, falto de inteligencia o entendimiento"],
    ["TIMAR", "Quitar o robar una cosa con engaño"],
    ["ULCERA", "Lesión que aparece en la piel"],
    ["URNA", "Caja de metal, piedra u otra materia"],
    ["VENCEJO", "Lazo usado para atar algo"],
    ["VATICINAR", "Pronosticar"],
    ["WATT", "Vatio"],
    ["WIFI", "Internet"],
    ["XERO", "Prefijo que significa seco"],
    ["XENOFOBIA", "Rechazo a los extranjeros"],
    ["YACARÉ", "Caimán"],
    ["YACER", "Estar echada o tendida horizontalmente"],
    ["ZAINO", " Traidor, falso"],
    ["ZONZO", "Que no tiene viveza, energía, ni gracia"]
]

let indexWord = Math.floor(Math.random() * wordList.length); // Choose an index for a  random word from the list of words
let alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let mistakes = 0;
let lives = 6;
let gameLetter;
let showLives;
let letterList = [];
let usedLetter = [];

let hint = wordList[indexWord][1]



// Draw alphabet
function showAlphabet() {
    //  create a new HTML element and attach it to the DOM tree
    let alphabetList = document.querySelector(".game__alphabet"); //  Select div element from DOM
    for (i = 0; i < alphabet.length; i++) {
        let alphabetLetter = document.createElement("button"); //  Create "button" element for each alphabet letter
        alphabetLetter.className = "alphabet__item"
        alphabetLetter.value = alphabet[i] // Add alphabet letter as the value of the element
        alphabetLetter.textContent = alphabet[i] // Add alphabet letter to the "button" element. The player will see this  
        alphabetLetter.addEventListener("click", compareLetter);
        alphabetLetter.addEventListener("click", removeLetter);
        alphabetList.appendChild(alphabetLetter); //attach the "buttons" to the "game__alphabet" element from DOM
    }
}

// Draw boxes for random word 
function randomWord() {
    // Choose random word from the list
    for (let i = 0; i < wordList[indexWord][0].length; i++) { // Use random number as index to find a random word  
        let letter = wordList[indexWord][0][i] //Letters of the chosen word
        letterList.push(letter)
    }

    // Draw boxes for the word
    let gameList = document.querySelector('.game__word');
    for (i = 0; i < letterList.length; i++) {
        gameLetter = document.createElement('li');
        gameLetter.className = "game__word--letter game__word--letter" + i;
        gameList.appendChild(gameLetter);
    }
}

// Show hint for the selected word 
function showHint() {
    let showHint = document.querySelector(".game__hint");
    showHint.innerHTML = hint
}

// Remove elements when the game ends
function removeElements() {
    document.querySelector(".game").remove(); // Remove word and hangman 
    document.querySelector(".game__button--hint").remove();
    document.querySelector(".game__alphabet").remove();
}
// Show message according to the status
function gameOverMessage(status) {
    message = document.querySelector(".game__message") // Get element from DOM
    let imgGameOver = document.querySelector(".game-over-img") // select "img" element from DOM
    if (status == "winner") {
        message.innerHTML = `Ganaste, descubriste la palabra ${letterList.join("")}` // Show winning message. Use join to turn array into string
        imgGameOver.src = "./images/happyFace.png";
    }
    if (status == "loser") {
        message.innerHTML = `Perdiste, la palabra era ${letterList.join("")} que se define como ${hint.toLowerCase()}` // Show losing message. Use join to turn array into string
        imgGameOver.src = "./images/sadFace.png";
    }
}

// Compare Letter chosen by the player and write it down on the empty boxes if it matches 
function compareLetter() {
    let selectedLetter = this.value;
    if (letterList.includes(selectedLetter)) { // The word includes the letter selected by the player:
        for (i = 0; i < letterList.length; i++) {
            if (letterList[i] == selectedLetter) { // The player's letter matches the letter in a position of the word:
                indexLetter = letterList.indexOf(selectedLetter) // Returns the index or position where the selected letter appears in the word 
                position = document.querySelector(".game__word--letter" + i) // Get element from DOM (boxes drawn previously) 
                position.innerHTML = selectedLetter // Write the letter in the places where it matches the position of the same letter in the word 
                usedLetter.splice(position, 0, selectedLetter) // Position to add items, number items to be removed, element to be added
            }
            if (usedLetter.length == letterList.length) { // Compare arrays: list with letters of the word and list with letters chosen by the player 
                removeElements();
                gameOverMessage("winner")
            }
        }
    } else { // The word doesn't include the letter selected by the player:
        if (mistakes < 6) {
            showLives = document.querySelector(".game__lives") // Select "div" element from DOM
            showLives.innerHTML = `Vidas restantes ${lives - mistakes}` // Show counter lives
            let image = document.querySelector(".game__hangman") // select "img" element from DOM
            image.src = "./images/hangman" + mistakes + ".png"; // change hangman depending on the mistakes 
            mistakes++
        } else {
            removeElements();
            gameOverMessage("loser");
        }
    }

}


// Remove chosen letter letter
function removeLetter() {
    this.disabled = true
}

function restart() {
    window.location.reload()
}

function start() {
    showAlphabet();
    randomWord();
    compareLetter();
}