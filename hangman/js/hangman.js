
class HangmanGame {
    constructor(hangmanWords) {
        this.hangmanWords = hangmanWords;
        this.wordToGuess = this.getRandom().split('');
        this.lettersPicked = [];
        this.lettersGuessed = 0;
        this.errorsLeft = 15;

        console.log(this.wordToGuess);
        console.log(this.lettersPicked);
    }


    getRandom() {
        let randomValue = Math.floor(Math.random() * this.hangmanWords.length);
        return this.hangmanWords[randomValue];
    };
  
    
    checkLetter(letter) {
        this.lettersPicked.push(letter);
        const foundMatch = this.wordToGuess.includes(letter);
        console.log(foundMatch);
        console.log(this.wordToGuess, letter);

        if (foundMatch === true) {
            console.log("the letter picked is in the word: " + letter);
            this.lettersGuessed += 1;
            return true;
        } else {
            this.errorsLeft -= 1;
            console.log("you have only " + this.errorsLeft + " errors left")
            return false;
        }
    }

    getWordStatus() {
        let wordStatus = [];

        for (let i = 0; i < this.wordToGuess.length; i++) {    

            if (this.lettersPicked.includes(this.wordToGuess[i])) {
                wordStatus.push(this.wordToGuess[i]);
                console.log("this is the letter: " + this.wordToGuess[i]);
            } else {
                wordStatus.push('_');
                console.log("this is the letter: " + this.wordToGuess[i]);
            }
        }
        console.log(wordStatus);
        return wordStatus;
    }

    getGameStatus(){

    // completed
        if (this.getWordStatus().indexOf('_') === -1){
            console.log('You won the game!')
        }
    // lost
        else if (this.errorsLeft === 0) {
            console.log('Sorry, you\'ve lost');
        }
    // playing
        else {
            console.log('Keep trying');
        }

    }

}