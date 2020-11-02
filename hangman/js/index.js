const hangmanWords = [
    'variable',
    'array',
    'expression',
    'function',
    'loop',
    'object',
    'method',
    'operator',
    'parameter'
];

const hangman = new HangmanGame(hangmanWords);
hangman.getRandom();
hangman.checkLetter();
hangman.getWordStatus();
hangman.getGameStatus()



let keyDiv = document.querySelectorAll('.key');
console.log(keyDiv);

keyDiv.forEach(key => {
    key.addEventListener('click', function () {
    let clickedKey = key.innerHTML;
    console.log("clicked: " + clickedKey);
    // hangman.checkLetter(clickedKey)
    hangman.userGuessedLetter(clickedKey);
    })
})