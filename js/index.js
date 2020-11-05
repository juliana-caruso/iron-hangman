const hangmanWords = [
    'VARIABLE',
    'EXPRESSION',
    'FUNCTION',
    'OBJECT',
    'METHOD',
    'OPERATOR',
    'PARAMETER',
    'COMMENT',
    'IDENTIFIER',
    'BOOLEAN',
    'CONDITION',
    'ITERATION',
    'CONDITION',
    'SWITCH',
    'INTEGER',
    'DECLARATION',
    'DOCUMENT',
    'STRING',
    'UNDEFINED',
];

const hangman = new HangmanGame(hangmanWords);

let keyDiv = document.querySelectorAll('.key');
// console.log(keyDiv);

keyDiv.forEach(key => {
    // console.log("Letter clicked: " + key);
    key.addEventListener('click', function () {
    let clickedKey = key.innerHTML;
    // console.log("Letter clicked: " + clickedKey);
    key.classList.add("change-key-color");
    hangman.userGuessedLetter(clickedKey);
    })
})

let startButton = document.querySelector('.start-game');
        
    startButton.addEventListener('click', function () {
        hangman.startGame();
    })