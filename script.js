// List for each category
const words = [
    ["ABARROTES", "artículos de uso doméstico"],
    ["ACECINAR", "salar cualquier tipo de carne ahumada"],
    ["ACIDIA", "pereza"],
    ["BOREAS", "viento que sopla del norte"],
    ["BUFAR", "manifestar enojo con sonidos"],
    ["CALIGINOSO", "nebuloso, turbio, oscuro"],
    ["CAPCIOSO", "engañoso, que conduce a error"],
    ["DADIVAS", "regalos, presentes"],
    ["DENUESTO", "palabra empleada para insultar"],
    ["EMASCULAR", "castrar"],
    ["EMBELECAR", "engañar con halagos"],
    ["FENECER", "concluir, Morir"],
    ["FIGARO", "barbero"],
    ["GARLITO", "trampa o engaño para una persona"],
    ["HESITACION", "duda, vacilación"],
    ["HISTRION", "actor de teatro"],
    ["IDONEO", "apto"],
    ["INCITAR", "estimular"],
    ["JAEZ", "adorno que se pone a las caballerías"],
    ["JACARO", "fanfarrón"],
    ["KAYAK", "canoa individual que utilizan los esquimales"],
    ["KEFIR", "alimento turco gelatinoso semejante al yogur"],
    ["LADINO", "actúa con astucia y disimulo"],
    ["LASO", "desfallecido, cansado, sin fuerzas"],
    ["MACULA", "mancha"],
    ["MELOPEA", "canto monótono"],
    ["NIMIO", "insignificante"],
    ["NEPOTISMO", "abuso de poder para favorecer parientes y amigos"],
    ["ÑAPA", "gratificación pequeña para recompensar un servicio"],
    ["ÑIQUIÑAQUE", "despreciable"],
    ["OBNUBILAR", "hacer perder la capacidad de razonar"],
    ["OBITO", "muerte de una persona"],
    ["PANACEA", "remedio para cualquier tipo de problema"],
    ["PATRAÑA", "mentira o falsedad grande y complicada"],
    ["QUERELLA", "acusación"],
    ["QUEJA", "reclamación o protesta"],
    ["RECOLETO", "lugar apartado"],
    ["ROZAGANTE", "vistoso"],
    ["SINDERESIS", "juzgar rectamente, con acierto"],
    ["SOFLAMA", "arenga en España"],
    ["TARUGO", "falto de inteligencia o entendimiento en México"],
    ["TIMAR", "quitar o robar una cosa con engaño"],
    ["ULCERA", "lesión que aparece en la piel"],
    ["URNA", "caja de metal, piedra u otra materia"],
    ["VENCEJO", "lazo usado para atar algo"],
    ["VATICINAR", "pronosticar"],
    ["WATT", "vatio"],
    ["WIFI", "internet"],
    ["XERO", "prefijo que significa seco"],
    ["XENOFOBIA", "rechazo a los extranjeros"],
    ["YACARE", "caimán"],
    ["YACER", "estar echada o tendida horizontalmente"],
    ["ZAINO", "traidor, falso"],
    ["ZONZO", "que no tiene viveza, energía, ni gracia"]
];
const capitals = [
    ["KABUL", "la capital de Afganistán"],
    ["BERLIN", "la capital de Alemania"],
    ["ARGEL", "la capital de Argelia"],
    ["BUENOS AIRES", "la capital de Argentina"]
    ["CANBERRA", "la capital de Australia"],
    ["VIENA", "la capital de Austria"],
    ["BRUSELAS", "la capital de Bélgica"],
    ["SUCRE", "la capital de Bolivia"],
    ["BRASILIA", "la capital de BrasiL"],
    ["SOFIA", "la capital de Bulgaria"],
    ["OTTAWA", "la capital de Canadá"],
    ["DOHA", "la capital de Catar"],
    ["SANTIAGO DE CHILE", "la capital de Chile"],
    ["PEKIN", "la capital de China"],
    ["BOGOTA", "la capital de Colombia"],
    ["PIONYANG", "la capital de Corea del Norte"],
    ["SEUL", "la capital de Corea del Sur"],
    ["SAN JOSE", "la capital de Costa Rica"],
    ["ZAGREB", "la capital de Croacia"],
    ["LA HABANA", "la capital de Cuba"],
    ["COPENHAGUE", "la capital de Dinamarca"],
    ["QUITO", "la capital de Ecuador"],
    ["EL CAIRO", "la capital de Egipto"],
    ["SAN SALVADOR", "la capital de El Salvador"],
    ["ABU DABI", "la capital de Emirato Árabes Unidos"],
    ["MADRID", "la capital de España"],
    ["WASHINGTON DC", "la capital de Estados Unidos"],
    ["MANILA", "la capital de Filipinas"],
    ["HELSINKI", "la capital de Finlandia"],
    ["PARIS", "la capital de Francia"],
    ["ATENAS", "la capital de Grecia"],
    ["CIUDAD DE GUATEMALA", "la capital de Guatemala"],
    ["GEORGETOWN", "la capital de Guyana"],
    ["PUERTO PRINCIPE", "la capital de Haití"],
    ["TEGUCIGALPA", "la capital de Honduras"],
    ["BUDAPEST", "la capital de Hungría"],
    ["NEUVA DELHI", "la capital de India"],
    ["YAKARTA", "la capital de Indonesia"],
    ["BAGDAD", "la capital de Irak"],
    ["TEHERAN", "la capital de Irán"],
    ["DUBLIN", "la capital de Irlanda"],
    ["REIKIAVIK", "la capital de Islandia"],
    ["JERUSALEN", "la capital de Israel"],
    ["ROMA", "la capital de Italia"],
    ["KINGSTON", "la capital de Jamaica"],
    ["TOKIO", "la capital de Japón"],
    ["AMAN", "la capital de Jordania"],
    ["NAIROBI", "la capital de Kenia"],
    ["PRISTINA", "la capital de Kosovo"],
    ["BEIRUT", "la capital de Líbano"],
    ["RABAT", "la capital de Marruecos"],
    ["CIUDAD DE MEXICO", "la capital de México"],
    ["MANAGUA", "la capital de Nicaragua"],
    ["OSLO", "la capital de Noruega"],
    ["WELLINGTON", "la capital de Nueva Zelanda"],
    ["AMSTERDAM", "la capital de Países bajos"],
    ["CIUDAD DE PANAMA", "la capital de Panama"],
    ["ASUNCION", "la capital de Paraguay"],
    ["LIMA", "la capital de Perú"],
    ["VARSOVIA", "la capital de Polonia"],
    ["LISBOA", "la capital de Portugal"],
    ["LONDRES", "la capital de Inglaterra"],
    ["DAKAR", "la capital de Senegal"],
    ["BELGRADO", "la capital de Serbia"],
    ["ESTOCOLMO", "la capital de Suecia"],
    ["BERNA", "la capital de Suiza"],
    ["BANGKOK", "la capital de Tailandia"],
    ["TAIPEI", "la capital de Taiwán"],
    ["DODOMA", "la capital de Tanzania"],
    ["PUERTO ESPAÑA", "la capital de Trinidad y Tobago"],
    ["ANKARA", "la capital de Turquía"],
    ["KIEV", "la capital de Ucrania"],
    ["MONTEVIDEO", "la capital de Uruguay"],
    ["CIUDAD DEL VATICANO", "la capital de Ciudad del Vaticano "],
    ["CARACAS", "la capital de Venezuela"],
    ["HARARE", "la capital de Zimbabue"],
]

// List of categories 
const category = [
    ["Palabras poco comunes", words],
    ["Capitales del mundo", capitals]
]

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let lives = 6;

// Variables
let indexCategory = Math.floor(Math.random() * category.length); // Index for chosen category 
let gameCategory = category[indexCategory][1]; // Get list of words from the category --> [word, hint]

let indexWord = Math.floor(Math.random() * gameCategory.length); // Index for random word in the category chosen 
let hint = gameCategory[indexWord][1];

let mistakes = 0;
let gameWord = [];
let usedLetter = [];

// Draw alphabet
function showAlphabet() {
    //  create a new HTML element and attach it to the DOM tree
    let alphabetLetters = document.querySelector(".game__alphabet"); //  Select div element from DOM
    for (let i = 0; i < alphabet.length; i++) {
        let alphabetLetter = document.createElement("button"); //  Create "button" element for each alphabet letter
        alphabetLetter.className = "alphabet__item alphabet__item--" + alphabet[i];
        alphabetLetter.value = alphabet[i]; // Add alphabet letter as the value of the element
        alphabetLetter.textContent = alphabet[i]; // Add alphabet letter to the "button" element. The player will see this  
        alphabetLetter.addEventListener("click", compareLetter); // see if the alphabet letter matches any letter of the word 
        alphabetLetter.addEventListener("click", removeLetter); // disable alphabet letter after click
        alphabetLetters.appendChild(alphabetLetter); //attach the "buttons" to the "game__alphabet" element from DOM
    }
}

// Detect pressed key on the PC keyboard and disabled it on the screen keyboard -> Establish it as clicked 
function compareKey() {
    document.addEventListener("keydown", function(event) { // Detect pressed key 
        let key = event.key.toUpperCase(); // Turn pressed key into upper case so that it matches game's format
        for (i = 0; i < alphabet.length; i++) {
            if (key == alphabet[i]) { // See if the pressed key is a letter (compare pressed key with alphabet letters previously defined in constant "alphabet")
                let buttonKey = document.querySelector(".alphabet__item--" + key); // get button of pressed key 
                buttonKey.click(); // simulate a mouse click on an element
                buttonKey.addEventListener("click", removeLetter); // Disable button 
            }
        }
    })
}

// Compare Letter chosen by the player and write it down on the empty boxes if it matches 
function compareLetter() {
    compareKey(); // Letter pressed on PC keyboard  
    let selectedLetter = this.value; // Value of alphabet letter clicked
    if (gameWord.includes(selectedLetter)) { // The word includes the letter selected by the player:
        for (let i = 0; i < gameWord.length; i++) {
            if (gameWord[i] == selectedLetter) { // The player's letter matches the letter in a position of the word:
                position = document.querySelector(".game__word--letter" + i); // Get element from DOM (boxes drawn previously) in the position where the letter appears
                position.innerHTML = selectedLetter; // Write the slected letter in the places where it matches 
                usedLetter.splice(position, 0, selectedLetter); // splice(Position to add items, number items to be removed, element to be added)
            }
            if (usedLetter.length == gameWord.length) { // Compare arrays: list with letters of the word and list with letters chosen by the player . If it is a frase, there is already a "-" in the position where there should be sapaces (see showWordBoxes function)
                clearScreen("winner");
                gameOverMessage("winner");
            }
        }
    } else { // The word doesn't include the letter selected by the player:
        if (mistakes < lives) {
            let showLives = document.querySelector(".game__lives") // Select "div" element from DOM
            showLives.innerHTML = `Vidas restantes ${lives - mistakes}` // Show counter lives
            let image = document.querySelector(".game__hangman") // select "img" element from DOM
            image.src = "./images/hangman" + mistakes + ".png"; // change hangman depending on mistakes made
            mistakes++
        } else {
            clearScreen("loser");
            gameOverMessage("loser");
        }
    }
}

// Remove elements when the game ends
function clearScreen(status) { // status ->"winner" or "loser" 
    if (status == "winner") {
        document.querySelector(".game").remove();
        document.querySelector(".game__button--hint").remove();
        document.querySelector(".game__alphabet").remove();
        document.querySelector(".game__button--restart").value = "Siguiente palabra"; // Change button text from "Play again" to "Next-Word"
    }
    if (status == "loser") {
        document.querySelector(".game").remove();
        document.querySelector(".game__button--hint").remove();
        document.querySelector(".game__alphabet").remove();
    }
}

// Show message according to the status
function gameOverMessage(status) { // status-> "winner" or "loser" 
    message = document.querySelector(".game__message"); // Get element from DOM
    let imgGameOver = document.querySelector(".game-over-img"); // select "img" element from DOM
    if (status == "winner") {
        message.innerHTML = `Ganaste, descubriste la palabra ${gameWord.join("")}`; // Show winning message. Use join to turn array into string "w""o""r""d"  ->word
        imgGameOver.src = "./images/happyFace.png";
    }
    if (status == "loser") {
        message.innerHTML = `Perdiste, la palabra era ${gameWord.join("")} que es ${hint}`; // Show losing message. Use join to turn array into string
        imgGameOver.src = "./images/sadFace.png";
    }
}

// Remove chosen letter of the screen alphabet 
function removeLetter() {
    this.disabled = true
}

// Choose random word from the list
function randomWord(category, index) { // category->  [word,hint]   ; index-> random number to get one word and its hint [random word,hint random word]
    for (let i = 0; i < category[index][0].length; i++) { // Use random number as index to find a random word  
        let letter = category[index][0][i]; //Letters of the chosen word
        gameWord.push(letter);
    }
    return gameWord;
}

// Draw boxes for the word chosen with function randomWord
function showWordBoxes(word) { // list-> Array with letters of the word chosen
    let wordBoxes = document.querySelector('.game__word'); // Get element from DOM
    for (let i = 0; i < word.length; i++) {
        let wordLetters = document.createElement('li'); // Create an element for each letter of the word
        wordLetters.className = "game__word--letter game__word--letter" + i;
        wordBoxes.appendChild(wordLetters); // Add created elements to DOM element
        if (word[i] == " ") { // If selected word has more than one word, it has spaces between words
            document.querySelector(".game__word--letter" + i).innerHTML = "-" // Place an hyphen in the positions where there is an space
            usedLetter.splice(i, 0, "-"); // Add hyphhen to selected letters, as it won't be part of the selected letters  
        }
    }
}


// Show hint for the selected word 
function showHint() {
    let showHint = document.querySelector(".game__hint"); // Get element from DOM 
    showHint.innerHTML = hint; // Show hint 
}

function restart() {
    window.location.reload()
}

function start() {
    showAlphabet();
    randomWord(gameCategory, indexWord); // returns: gameWord
    showWordBoxes(gameWord);
    compareLetter();
}