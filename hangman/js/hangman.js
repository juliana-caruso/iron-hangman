class HangmanGame {
    constructor(hangmanWords) {
        this.hangmanWords = hangmanWords;
        this.wordToGuess = this.getRandom().split('');
        this.lettersPicked = [];
        this.lettersGuessed = 0;
        this.errorsLeft = 8;

        // console.log(this.lettersPicked);
    }

    startGame() {
        clearCanvas();
        this.resetKeyboard();
        this.wordToGuess = this.getRandom().split('');
        this.lettersPicked = [];
        this.getWordStatus();
        console.log(this.wordToGuess);
        document.querySelector(".message").innerText = "Pick a letter using the keyboard below.";
        this.errorsLeft = 8;
        this.lettersGuessed = 0;
     }

    getRandom() {
        let randomValue = Math.floor(Math.random() * this.hangmanWords.length);
        return this.hangmanWords[randomValue];
    };
  
    
    checkLetter(letter) {
        this.lettersPicked.push(letter);
        const foundMatch = this.wordToGuess.includes(letter);
        // console.log(foundMatch);
        // console.log(this.wordToGuess, letter);

        if (foundMatch === true) {
            // console.log("the letter picked is in the word: " + letter);
            this.lettersGuessed += 1;
            document.querySelector(".message").innerText = "Congratulatios! You guessed a letter 😊";
            return true;
        } else {
            this.errorsLeft -= 1;
            document.querySelector(".message").innerText = "The letter is not in the word 👎🏼";

            Draw(draws[step++]);
            return false;
        }
    }

    getWordStatus() {
        let displayWord = [];

            for (let i = 0; i < this.wordToGuess.length; i++) {    
                if (this.lettersPicked.includes(this.wordToGuess[i])) {
                    displayWord.push(this.wordToGuess[i]);
                } else {
                    displayWord.push('_');
                }
            }

        document.querySelector('.word-status').innerText = displayWord.join('');
        //this.printMessage();
        return displayWord;
    }

    getGameStatus(){
        let gameStatus = '';

    // completed
        if (this.getWordStatus().indexOf('_') === -1){
            gameStatus = 'You won the game!';
        }
    // lost
        else if (this.errorsLeft === 0) {
            gameStatus = 'Sorry, you\'ve lost';
        }
    // playing
        else {
            gameStatus = 'Keep trying';
        }

    }

    userGuessedLetter(clickedKey) {
        this.checkLetter(clickedKey);
        this.getWordStatus();
        this.getGameStatus();
    }

    resetKeyboard() {
        keyDiv.forEach(key => {
            key.classList.remove("change-key-color");
        })
    }

}