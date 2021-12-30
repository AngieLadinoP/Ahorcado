let wordList = ["ABARROTES", "ACECINAR", "BOREAS", "BUFAR", "CALIGINOSO", "CAPCIOSO", "DADIVAS", "DENUESTO", "EMASCULAR", "EMBELECAR", "FENECER", "FIGARO", "GALBANA", "GARLITO", "HESITACION", "HISTRION", "IDONEO", "INCITAR", "JAEZ", "JACARO", "KAYAK", "KEFIR", "LADINO", "LASO", "MACULA", "MELOPEA", "NIMIO", "NEPOTISMO", "ÑAPA", "ÑIQUIÑAQUE", "OBNUBILAR", "OBITO", "PANACEA", "PATRAÑA", "QUERELLA", "QUEJA", "RECOLETO", "ROZAGANTE", "SINDERESIS", "SOFLAMA", "TARUGO", "TRAPACERIA", "ULCERA", "URNA", "VIEIRA", "VATICINAR", "WATT", "WIFI", "XERO", "XENOFOBIA", "YACARÉ", "YEN", "ZAINO", "ZONZO"];

let hintList = ["Artículos de uso doméstico", "Salar cualquier tipo de carne ahumada", "Viento del norte", "Manifestar enojo", "Niebla, oscuridad", "Engañoso, que conduce a error", "Regalos, presentes", "Insulto, ofensa", "Castrar", "Engañar con halagos", "Concluir, Morir", "Barbero", "Pereza", "Trampa", "Duda", "Actor", "Apto", "Estimular", "Adorno de las caballerías", "Fanfarrón", "Canoa esquimales", "Alimento turco gelatinoso", "Astuto", "Cansado", "Mancha", "Melodía", "Insignificante", "Abuso de poder para favorecer parientes y amigos", "Añadidura", "Despreciable", "Ofuscar", "Defunción", "Remedio", "Embuste", "Acusación", "Reclamación", "Lugar apartado", "Vistoso", "Buen juicio", "Arenga", "Zoquete", "Fraude", "Lesión tejidos orgánicos", "Caja", "Molusco", "Pronosticar", "Vatio", "Internet", "Seco", "Fobia a extranjero", "Caimán", "Moneda Japón", "Traidor", "Soso"]


let indexWord = Math.floor(Math.random() * wordList.length); // Choose an index for a  random word from the list of words
let alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let mistakes = 0;
let lives = 6;
let gameLetter;
let showLives;
let letterList = [];
let usedLetter = [];
let hint = hintList[indexWord]



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
    for (let i = 0; i < wordList[indexWord].length; i++) { // Use random number as index to find a random word  
        let letter = wordList[indexWord][i] //Letters of the chosen word
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

// Compare Letter chosen by the player and write it down on the empty boxes if it matches 
function compareLetter() {
    let selectedLetter = this.value;
    if (letterList.includes(selectedLetter)) { // The word includes the letter selected by the player:
        for (i = 0; i < letterList.length; i++) {
            if (letterList[i] == selectedLetter) { // The player's letter matches the letter in a position of the word:
                indexLetter = letterList.indexOf(selectedLetter) // Returns the index or position where the selected letter appears in the word 
                position = document.querySelector(".game__word--letter" + i) // Get element from DOM (boxes drawn previously) 
                position.innerHTML = selectedLetter // Write the letter in the places where it matches the position of the same letter in the word 
                usedLetter.splice(position, 0, selectedLetter)
            }
            if (usedLetter.length == letterList.length) { // Compare arrays: list with letters of the word and list with letters chosen by the player 
                document.querySelector(".game").remove(); // Remove word and hangman 
                document.querySelector(".game__button--hint").remove();
                document.querySelector(".game__alphabet").remove();
                message = document.querySelector(".game__message") // Get element from DOM
                message.innerHTML = `Ganaste, descubriste la palabra ${letterList.join("")}` // Show winning message. Use join to turn array into string
                let imgGameOver = document.querySelector(".game-over-img") // select "img" element from DOM
                imgGameOver.src = "./images/happyFace.png";
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
            document.querySelector(".game").remove();
            document.querySelector(".game__button--hint").remove();
            document.querySelector(".game__alphabet").remove();
            message = document.querySelector(".game__message") // Get element from DOM
            message.innerHTML = `Perdiste, la palabra era ${letterList.join("")} que se define como ${hint.toLowerCase()}` // Show losing message. Use join to turn array into string
            let imgGameOver = document.querySelector(".game-over-img") // select "img" element from DOM
            imgGameOver.src = "./images/sadFace.png";


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