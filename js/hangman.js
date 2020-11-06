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
        document.querySelector(".message").innerText = "Pick a letter using the keyboard below ↓";
        this.errorsLeft = 8;
        this.lettersGuessed = 0;
        document.querySelector(".keyboard-wrapper").classList.remove("hide");
        document.querySelector('.word-status').classList.remove("red");
        document.querySelector(".happy").classList.add("hideImg");
        document.querySelector(".sad").classList.add("hideImg");
        document.querySelector(".thumbs").innerHTML="";
     }

    getRandom() {
        let randomValue = Math.floor(Math.random() * this.hangmanWords.length);
        return this.hangmanWords[randomValue];
    };
    
    checkLetter(letter) {
        const message = document.querySelector(".message");
        const thumbs = document.querySelector(".thumbs");
        
        if (this.lettersPicked.includes(letter)){
            return 'This letter was already picked';
        } else {
            this.lettersPicked.push(letter);
            const foundMatch = this.wordToGuess.includes(letter);

            if (foundMatch === true) {
                this.lettersGuessed += 1;
                message.innerText = "Well done! You guessed a letter";
                thumbs.innerHTML="<img src=\"images/thumbs-up.png\">";
                return true;
            } else {
                this.errorsLeft -= 1;
                message.innerText = "The letter is not in the word";
                thumbs.innerHTML="<img src=\"images/thumbs-down.png\">";

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
        const happy = document.querySelector(".happy");
        const sad = document.querySelector(".sad");

    // completed
        if (this.getWordStatus().indexOf('_') === -1){
            gameStatus = true;
            document.querySelector(".thumbs").innerHTML="";
            document.querySelector(".message").innerText = "";
            addHide.classList.add("hide");
            document.querySelector(".message").innerText = "Congratulations! You saved the man!";
            happy.classList.remove("hideImg");
        }
    // lost
        else if (this.errorsLeft === 0) {
            gameStatus = false;
            document.querySelector(".thumbs").innerHTML="";
            document.querySelector(".message").innerText = "";
            addHide.classList.add("hide");
            document.querySelector(".message").innerText = "You lost! The man has been hanged! ";
            document.querySelector('.word-status').innerText = this.wordToGuess.join('');
            document.querySelector('.word-status').innerText = this.wordToGuess.join('');
            document.querySelector('.word-status').classList.add("red");
            sad.classList.remove("hideImg");
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