class HangmanGame {
    constructor(hangmanWords) {
        this.hangmanWords = hangmanWords;
        this.wordToGuess = this.getRandom().split('');
        this.lettersPicked = [];
        this.lettersGuessed = 0;
        this.errorsLeft = 8;
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
        document.querySelector(".keyboard-wrapper").classList.remove("hide");
     }

    getRandom() {
        let randomValue = Math.floor(Math.random() * this.hangmanWords.length);
        return this.hangmanWords[randomValue];
    };
    
    checkLetter(letter) {
        if (this.lettersPicked.includes(letter)){
            return 'This letter was already picked';
        } else {
            this.lettersPicked.push(letter);
            const foundMatch = this.wordToGuess.includes(letter);

            if (foundMatch === true) {
                this.lettersGuessed += 1;
                document.querySelector(".message").innerText = "Well done! You guessed a letter 😊";
                return true;
            } else {
                this.errorsLeft -= 1;
                document.querySelector(".message").innerText = "The letter is not in the word 👎🏼";
                
                // draw the hangman on canvas
                Draw(draws[step++]);
                return false;
            }
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
        return displayWord;
    }

    getGameStatus(){
        let gameStatus = '';
        let addHide = document.querySelector(".keyboard-wrapper");

    // completed
        if (this.getWordStatus().indexOf('_') === -1){
            document.querySelector(".message").innerText = "";
            gameStatus = true;
            addHide.classList.add("hide");
            document.querySelector(".message").innerText = "Congratulations! You saved the man! Click the button above to start a new game.";
        }
    // lost
        else if (this.errorsLeft === 0) {
            document.querySelector(".message").innerText = "";
            gameStatus = false;
            addHide.classList.add("hide");
            document.querySelector(".message").innerText = "You lost! The man was hanged! Click the button above to start a new game.";
        }
        return gameStatus;
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