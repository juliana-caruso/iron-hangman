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
hangman.checkLetter('a');
hangman.getWordStatus();
hangman.getGameStatus()