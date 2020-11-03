const hangmanWords = [
    'VARIABLE',
    'ARRAY',
    'EXPRESSION',
    'FUNCTION',
    'LOOP',
    'OBJECT',
    'METHOD',
    'OPERATOR',
    'PARAMETER'
];

const hangman = new HangmanGame(hangmanWords);
hangman.getRandom();
hangman.startGame();
// hangman.checkLetter();
// hangman.getGameStatus()



let keyDiv = document.querySelectorAll('.key');
// console.log(keyDiv);

keyDiv.forEach(key => {
    key.addEventListener('click', function () {
    let clickedKey = key.innerHTML;
    console.log("Letter clicked: " + clickedKey);
    key.classList.add("change-key-color");
    hangman.userGuessedLetter(clickedKey);
    })
})